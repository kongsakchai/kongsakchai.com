import axios from "axios";
import type { Blogslink } from "src/models/Data.model";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  const map: Map<string, Blogslink[]> = new Map();
  let keys: string[] = [];

  await axios
    .get("/data/blogs.json")
    .then(res => {
      const data: Blogslink[] = res.data.blogs ?? [];

      for (let i = 0; i < data.length; i++) {
        const year = data[i].year;

        if (map.has(year)) {
          const list = map.get(year);
          map.set(year, [...list!, data[i]]);
        } else {
          map.set(year, [data[i]]);
        }
      }
      console.log(map);
      keys = [...map.keys()];
    })
    .catch(e => console.log("Api error"));

  return { map, keys };
}) satisfies PageLoad;
