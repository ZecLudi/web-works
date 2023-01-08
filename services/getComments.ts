import axios from "axios";
import { IComments } from "./IComments";

export const getComments = (post: string) =>
  axios.get<IComments[]>(
    `http://webreact.local/wp-json/wp/v2/comments?_embed${`&post=${post}`}`
  );
