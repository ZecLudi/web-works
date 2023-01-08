/* eslint-disable @next/next/no-img-element */

import React from "react";

import { getPosts } from "../../services/getPost";
import { useRouter } from "next/router";
import { IPost } from "../../services/IPost";
import Link from "next/link";
import { Comments } from "../../components/Comments";
export default function BlogPostPage() {
  // http://webreact.local/wp-json/wp/v2/posts
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = React.useState<IPost>();
  console.log("rerender blog", slug);
  React.useEffect(() => {
    slug && getPosts(String(slug)).then((res) => setPost(res.data[0]));
  }, [slug]);

  if (!post) {
    return <p>loading</p>;
  }
  const featuredImage = post["_embedded"]["wp:featuredmedia"];
  return (
    <main className="container">
      <Link href="/">Back</Link>
      {featuredImage && (
        <img
          src={featuredImage[0].media_details.sizes.medium.source_url}
          alt="Lorem"
        />
      )}
      <h1
        className="mb-5 text-4xl"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <Comments id={String(post.id)} />
    </main>
  );
}
