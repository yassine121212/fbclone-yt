import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";

import { getSession } from "next-auth/client";
import Feed from "../Components/Feed";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />
      <main className='flex'>
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //Get the User
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
