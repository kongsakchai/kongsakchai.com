<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Blogslink } from "src/models/Data.model";

  export let blog: Blogslink;

  const onClick = () => {
    goto(blog.path);
  };
</script>

<a class="card p-3 relative rounded-md overflow-hidden text-left h-[300px] w-[300px]" href={blog.path}>
  <img src={blog.image} alt={blog.title} class=" h-[200px] object-cover rounded-md" />
  <h3 class=" font-bold mt-3">{blog.title}</h3>
  <p class=" text-gray-500">{blog.from}</p>
  <p class="readmore text-sky-600">Read more ></p>
</a>

<style>
  .card:hover .readmore {
    text-decoration-line: underline;
  }
</style>
