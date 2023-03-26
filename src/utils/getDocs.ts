/* eslint-disable no-misleading-character-class */
import axios from "axios";
import { marked } from "marked";

export const getDocs = async (path: string, name: string) => {
  const data: string = await axios
    .get(`/docs/${path}/${name.toLowerCase()}.md`)
    .then(res => {
      let source = res.data;
      source = marked.parse(source.replace(/^[\\u200B\\u200C\\u200D\\u200E\\u200F\\uFEFF]/, ""));
      return source ?? "";
    })
    .catch(e => {
      return "404";
      console.log("Api error");
    });
  return data;
};
