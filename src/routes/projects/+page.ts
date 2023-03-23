import axios from "axios";
import type { Project } from "src/models/Data.model";
import type { PageLoad } from "./[name]/$types";

export const load = (async ({ params }) => {
  let projects: Project[] = [];

  await axios
    .get("/data/projects.json")
    .then(res => {
      projects = res.data.projects ?? [];
      projects.sort((a, b) => b.year - a.year);
    })
    .catch(e => console.log("Api error"));

  return { projects };
  
}) satisfies PageLoad;
