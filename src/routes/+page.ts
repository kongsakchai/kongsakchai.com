import axios from "axios";
import type { TimelineData } from "src/models/Data.model";
import type { PageLoad } from "./$types";

interface Data {
  work: TimelineData[];
  award: TimelineData[];
  education: TimelineData[];
}

export const load = (async ({ params }) => {
  let data: Data = { work: [], award: [], education: [] };

  await axios
    .get("/data/bio.json")
    .then(res => {
      data = res.data;
    })
    .catch(e => console.log("Api error"));

  return { data };
}) satisfies PageLoad;
