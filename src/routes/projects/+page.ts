import axios from "axios";
import type { Project } from "src/models/Data.model";
import type { PageLoad } from "./$types";
import data from "@data/projects.json";

export const load = (async ({ params }) => {
  return { projects: data.projects.sort((a, b) => b.year - a.year) as Project[] };
}) satisfies PageLoad;
