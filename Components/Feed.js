import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";
import { useSession } from "next-auth/client";

function Feed({ posts }) {
  return (
    <div className='flex-grow h-screen pv-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        {/* Stories */}
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
