import axios from "axios";

interface IPostCommentData {
  author_email: string;
  author_name: string;
  content: string;
  post: string;
}
export const postComment = (data: IPostCommentData) => {
  axios
    .post("http://webreact.local/wp-json/wp/v2/comments", data, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      alert("Submitano");

      return response.data.json();
    })
    .then((object) => {
      // Comment submission failed.
      // Output `object.message` to see the error message.
    })
    .catch((error) => console.error("Error:", error));
};
