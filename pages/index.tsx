/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { getPosts } from "../services/getPost";
import { BlogPost } from "../components/BlogPost/BlogPost";
import { IPost } from "../services/IPost";
import { Header } from "../components/Header/Header";
export default function Home() {
  // http://webreact.local/wp-json/wp/v2/posts

  const [posts, setPosts] = React.useState<IPost[]>([]);
  console.log("rerender home");
  React.useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);
  return (
    <div className="bg-slate-700">
      <main className="container">
        <Header />
        <div className="grid grid-cols-12 gap-4">
          {posts.map((post, i) => {
            return (
              <BlogPost
                className={i === 0 ? "col-span-4 row-span-8" : "col-span-4"}
                key={post.id}
                post={post}
                withFeatured={i < 3}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
