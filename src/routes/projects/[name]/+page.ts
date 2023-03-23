import { getDocs } from "@utils/getDocs";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  const source = await getDocs("projects", params.name);

  return {
    name: params.name,
    source,
  };
}) satisfies PageLoad;
