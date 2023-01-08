/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { IPost } from "../../services/IPost";

export const BlogPost = ({
  post,
  className = "",
  withFeatured = true,
}: {
  post: IPost;
  className?: string;
  withFeatured?: boolean;
}) => {
  const featuredImage = post["_embedded"]["wp:featuredmedia"];

  return (
    <div
      className={`p-4 shadow-lg border bg-slate-600 border-gray-500 ${className}`}
    >
      {withFeatured && featuredImage && (
        <Link href={`/blog/${post.slug}`}>
          <img
            className="w-full aspect-[4/3] object-cover"
            src={featuredImage[0].media_details.sizes.medium.source_url}
            alt="Lorem"
          />
        </Link>
      )}
      <Link href={"/blog/" + post.slug}>
        <h2
          className="mt-4 text-2xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </Link>
      <div
        className="text-white"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </div>
  );
};
