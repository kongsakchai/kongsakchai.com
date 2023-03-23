<script lang="ts">
  import BlogCard from "@components/blog/blogCard.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="page py-[100px]">
  <div class="grid grid-cols-3 gap-5 mt-10 w-[950px]">
    {#each data.keys as key (key)}
      <div class="border-0 border-b-2 border-solid border-gray-300 col-span-3 pb-2">
        <h2 class="font-bold">{key}</h2>
      </div>
      {#each data.map.get(key) ?? [] as value (value.title)}
        <div animate:flip={{ duration: 1000 }} in:fly={{ y: 100, duration: 1000 }} out:fly={{ y: 10, duration: 500 }}>
          <BlogCard blog={value} />
        </div>
      {/each}
    {/each}
  </div>
</div>
