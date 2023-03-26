<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Project } from "src/models/Data.model";

  export let data: Project;

  const onClick = () => {
    goto("projects/" + data.name.replaceAll(" ", "_"));
  };
</script>

<a
  href={"projects/" + data.name.replaceAll(" ", "_")}
  class="h-[300px] aspect-square relative rounded-md overflow-hidden"
>
  <img src={data.image} alt={data.name} class=" w-full h-full object-cover" />
  <section
    class=" opacity-0 hover:opacity-100 transition-all duration-500 absolute w-full h-full top-0 left-0 p-5 bg-shadow text-white flex flex-col gap-3"
  >
    <h3 class=" font-bold">{data.name} ({data.year})</h3>
    <p>{data.description}</p>
    <p>{data.tag.join(", ")}</p>
    <button class="btn mt-auto">เพิ่มเติม</button>
  </section>
</a>

<style>
  .btn {
    width: 100px;
    padding: 0.2rem;
    border-radius: 999px;
    border: 2px solid white;
    font-size: 0.8rem;
  }
</style>
