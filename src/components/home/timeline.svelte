<script lang="ts">
  import type { TimelineData } from "src/models/Data.model";

  export let data: TimelineData[];
</script>

<!-- <div class=" w-full flex flex-col gap-2 text-base"> -->
  {#each data as item}
    <section class=" w-full flex flex-row gap-2">
      <div class=" font-bold ">{item.year}</div>
      <div class=" font-normal flex-1">
        {item.name}
        {#each item.description as description}
          <div class="font-normal w-full">{description}</div>
        {/each}
      </div>
    </section>
  {/each}
<!-- </div> -->
