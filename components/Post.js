/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, image, timestamp, postImage }) {
  return (
    <div className='flex flex-col'>
      <div className='p-5 mt-4 bg-white rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
          {/* Image */}
          <div>
            <img className='rounded-full' src={image} height={40} width={40} />{" "}
          </div>

          {/* Name and Post time Stamp */}
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs text-gray-400'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
          {/* <div>{timestamp}</div> */}
        </div>

        {/* message */}
        <p>{message}</p>
        {postImage && (
          <div className='relative h-56 md:96 bg-white'>
            <Image
              className=''
              src={postImage}
              objectFit='cover'
              layout='fill'
            />{" "}
          </div>
        )}
      </div>
      {/* Buttons */}
      <div className='flex  justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
        <div className='InputIcon'>
          <ThumbUpIcon className='h-4' />{" "}
          <p className='text-xs sm:text-base'> Like</p>
        </div>
        <div className='InputIcon'>
          <ChatAltIcon className='h-4' />{" "}
          <p className='text-xs sm:text-base'> Comment</p>
        </div>
        <div className='InputIcon'>
          <ShareIcon className='h-4' />{" "}
          <p className='text-xs sm:text-base'> Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
