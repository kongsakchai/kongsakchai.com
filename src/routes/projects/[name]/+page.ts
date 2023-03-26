import { getDocs } from "@utils/getDocs";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  const contents = await getDocs("projects", params.name);
  const name = params.name.replaceAll("_", " ");
  return {
    name,
    contents,
  };
}) satisfies PageLoad;
