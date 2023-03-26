import type { PageLoad } from "./$types";
import data from "@data/bio.json";

export const load = (async ({ params }) => {
  return { data };
}) satisfies PageLoad;
