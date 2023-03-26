<script lang="ts">
  import PageComponent from "@components/layout/pageComponent.svelte";
  import ActiveButton from "@components/projects/activeButton.svelte";
  import ProjectCard from "@components/projects/projectCard.svelte";
  import { crossfade } from "@utils/crossfade";
  import type { Project } from "src/models/Data.model";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";

  const [send, receive] = crossfade;

  let tagSelect = "all";
  export let data: PageData;

  const onTagSelect = (tag: string) => {
    tagSelect = tag;
  };

  $: filter = (v: Project) => {
    if (tagSelect === "other") {
      return !v.filter.some(v => ["game", "web"].includes(v));
    }
    return v.filter.includes(tagSelect) || tagSelect === "all";
  };

</script>

<PageComponent align="center" class="py-[150px]">
  <div
    in:fly={{ y: -100, duration: 1000 }}
    out:fly={{ y: -50, duration: 500 }}
    class=" flex justify-between items-center gap-5"
  >
    <ActiveButton active={tagSelect === "all"} onClick={() => onTagSelect("all")}>
      <img src="/icons/app.svg" class=" w-5" alt="all" />All
    </ActiveButton>
    <ActiveButton active={tagSelect === "web"} onClick={() => onTagSelect("web")}>
      <img src="/icons/web.svg" class=" w-5" alt="web" />Web
    </ActiveButton>
    <ActiveButton active={tagSelect === "game"} onClick={() => onTagSelect("game")}>
      <img src="/icons/game.svg" class=" w-5" alt="game" />Game
    </ActiveButton>
    <ActiveButton active={tagSelect === "other"} onClick={() => onTagSelect("other")}>
      <img src="/icons/book.svg" class=" w-5" alt="other" />Others
    </ActiveButton>
  </div>
  <div class="grid grid-cols-3 gap-5 mt-10 w-[950px]">
    {#each data.projects.filter(filter) as project (project.name)}
      <div animate:flip={{ duration: 1000 }} in:fly={{ y: 100, duration: 1000 }} out:fly={{ y: 10, duration: 500 }}>
        <ProjectCard data={project} />
      </div>
    {/each}
  </div>
</PageComponent>
