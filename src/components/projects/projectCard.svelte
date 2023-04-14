<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Project } from "src/models/Data.model";

  export let data: Project;

  const onClick = () => {
    goto("projects/" + data.name.replaceAll(" ", "_"));
  };
</script>

<a href={"projects/" + data.name.replaceAll(" ", "_")}>
  <div class="card h-[300px] w-[300px] aspect-square relative rounded-md overflow-hidden shadow-out">
    <img src={data.image} alt={data.name} class="card-img w-full aspect-square object-cover" />
    <section
      class="card-section opacity-0 card-section p-5 bg-shadow text-white flex flex-col gap-3"
    >
      <h3 class=" font-bold">{data.name} ({data.year})</h3>
      <p>{data.description}</p>
      <p>{data.tag.join(", ")}</p>
      <button class="btn mt-auto">เพิ่มเติม</button>
    </section>
  </div>
</a>

<style>
  .btn {
    width: 100px;
    padding: 0.2rem;
    border-radius: 999px;
    border: 2px solid white;
    font-size: 0.8rem;
  }

  .card-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card:hover .card-img {
    transform: scale(1.1);
    transition: all;
    transition-duration: 500ms;
  }

  .card:hover .card-section {
    opacity: 1;
    transition: all;
    transition-duration: 500ms;
  }
</style>
