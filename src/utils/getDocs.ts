import axios from "axios";

export const getDocs = async (path: string, name: string) => {
  const data = await axios
    .get(`/docs/${path}/${name.toLowerCase()}.md`)
    .then(res => {
      return res.data ?? "";
    })
    .catch(e => {
      return "404";
      console.log("Api error");
    });
  return data;
};
