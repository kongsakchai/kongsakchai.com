<script lang="ts">
  import Pathbar from "@components/layout/pathbar.svelte";
  import { onMount } from "svelte";
  import { getDocs } from "@utils/getDocs";
  import type { PageData } from "./$types";
  import PageComponent from "@components/layout/pageComponent.svelte";
  import MdRead from "@components/common/mdRead.svelte";

  export let data: PageData;
</script>

<PageComponent justify="start" align="center">
  <Pathbar
    paths={[
      { title: "Projects", path: "/projects" },
      { title: data.name, path: "/projects/" + data.name },
    ]}
  />

  <MdRead contents={data.contents} class={"w-1/2 pb-[100px]"}/>
</PageComponent>
