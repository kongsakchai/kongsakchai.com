<script lang="ts">
  import type { TimelineData } from "src/models/Data.model";

  export let data: TimelineData[];
</script>

<!-- <div class=" w-full flex flex-col gap-2 text-base"> -->
{#each data as item, i}
  <div class=" font-bold ">{item.name}</div>
  <div class=" font-normal ml-5">
    {#each item.description as description}
      <div class="font-normal w-full">{description}</div>
    {/each}
  </div>
{/each}
<!-- </div> -->
