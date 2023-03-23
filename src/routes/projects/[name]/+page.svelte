<script lang="ts">
  import Pathbar from "@components/layout/pathbar.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";
  import { getDocs } from "@utils/getDocs";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="page">
  <Pathbar
    paths={[
      { title: "Projects", path: "/projects" },
      { title: data.name, path: "/projects/" + data.name },
    ]}
  />

  {#if data.source === "404"}
    <h3 class=" font-bold">Not found :\</h3>
  {:else}
    <div class="docs xl:w-1/3">
      <SvelteMarkdown source={data.source} />
    </div>
  {/if}
</div>
