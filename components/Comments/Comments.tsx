import axios from "axios";
import React from "react";
import { getComments } from "../../services/getComments";
import { IComments } from "../../services/IComments";
import { postComment } from "../../services/postComment";

export const Comments = ({ id }: { id: string }) => {
  const [comments, setComments] = React.useState<IComments[]>([]);
  console.log("rerender home");
  React.useEffect(() => {
    getComments(id).then((res) => setComments(res.data));
  }, []);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const [post, author_name, author_email, content] = [
      ...evt.target.elements,
    ].map((e: any) => e.value);

    postComment({
      post,
      author_name,
      author_email,
      content,
    });
  };
  return (
    <div>
      {comments.map((comment) => (
        <div
          className="border"
          key={comment.id}
          dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="postId" value={id} />
        <div>
          <label htmlFor="name">Name*</label>
          <input required type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input required type="text" name="email" />
        </div>
        <div>
          <label htmlFor="comment">Comment*</label>
          <textarea required name="comment" />
        </div>
        <p>Leave a Reply Your email address will not be published.</p>
        <input type="submit" value="ostavi komentar" />
      </form>
    </div>
  );
};
