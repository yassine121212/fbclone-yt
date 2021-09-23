/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import Image from "next/Image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickedRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              // When the upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onerror = () => {
      console.log(reader.error);
    };
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
    console.log(setImageToPost);
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md font-md mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        {/* <Image
          className='rounded-full'
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
        /> */}
        <form className='flex flex-1'>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none'
            type='text'
            placeholder={`Whats on your mind, ${session.user.name} ?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className='flex flex-col filter hover:brightness-100 transition duration-150 transform hover:scale-105 cursor-pointer'
          >
            <img className='h-10 object-contain' src={imageToPost} alt='' />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>
      <div
        className='flex justify-evenly'
        onClick={() => filePickedRef.current.click()}
      >
        <div className='InputIcon'>
          <VideoCameraIcon className='h-7 text-red-400' />
          <p className='statusLinks'>Live Video</p>
        </div>
        <div className='InputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='statusLinks'>Photo/Video</p>
          <input
            ref={filePickedRef}
            onChange={addImageToPost}
            type='file'
            hidden
          />
        </div>
        <div className='InputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='statusLinks'> Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
