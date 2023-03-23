<script lang="ts">
  import type { Pathbar } from "src/models/Data.model";

  export let paths: Pathbar[];
</script>

<div class="flex flex-nowrap mt-[70px] self-start p-10">
  {#each paths as path, i}
    <a href={path.path} class="mx-2 hover:underline text-lg">{path.title}</a> {i !== paths.length - 1 ? "/" : ""}
  {/each}
</div>
