import axios from "axios";
import { IPost } from "./IPost";

export const getPosts = (slug?: string) =>
  axios.get<IPost[]>(
    `http://webreact.local/wp-json/wp/v2/posts?_embed${
      slug ? `&slug=${slug}` : ""
    }`
  );
