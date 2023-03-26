import axios from "axios";
import type { Blogslink } from "src/models/Data.model";
import type { PageLoad } from "./$types";
import { blogs } from "@data/blogs.json";

export const load = (async ({ params }) => {
  const map: Map<string, Blogslink[]> = new Map();
  let keys: string[] = [];

  for (let i = 0; i < blogs.length; i++) {
    const year = blogs[i].year;

    if (map.has(year)) {
      const list = map.get(year);
      list && map.set(year, [...list, blogs[i]]);
    } else {
      map.set(year, [blogs[i]]);
    }
  }
  console.log(map);
  keys = [...map.keys()];

  return { map, keys };
}) satisfies PageLoad;
