<script lang="ts">
  import { goto } from "$app/navigation";
  import { crossfade } from "@utils/crossfade";
  import AwardComponent from "@components/home/award.svelte";
  import TimelineComponent from "@components/home/timeline.svelte";
  import Skill from "@components/home/skill.svelte";
  import Education from "@components/home/education.svelte";
  import type { PageData } from "./$types";
  import { fade, fly } from "svelte/transition";
  import PageComponent from "@components/layout/pageComponent.svelte";

  const [send, receive] = crossfade;
  export let data: PageData;
</script>

<PageComponent align="center">
  <div class="content-1 font-bold xl:w-1/3 lg:w-1/2 w-[55%] my-[150px]" out:fade={{ duration: 500 }}>
    <section in:fly={{ y: 100, duration: 500 }} class=" flex justify-between items-center w-full gap-8">
      <section class=" flex items-start flex-col gap-2">
        <h1 class=" ">Sakchai Paoin</h1>
        <p class="font-normal text-base">Full-Stack Developer</p>
      </section>
      <div in:receive={{ key: "profile" }} out:send={{ key: "profile" }}>
        <img src="/profile.jpg" class=" rounded-full aspect-square w-[100px]" alt="profile" />
      </div>
    </section>
    <section in:fly={{ y: 100, duration: 600 }} class=" flex items-start flex-col gap-3 w-full">
      <h3 >😁 Me</h3>
      <p class=" font-normal">
        &emsp I am Sakchai Paoin, a 3rd-year Computer Engineering student at KMUTT. My coding journey began in 2015, and
        I have been passionate about learning new technologies ever since. I am constantly looking for new challenges to
        improve my skills as a developer.
      </p>
    </section>
    <section in:fly={{ y: 100, duration: 700 }} class="w-full flex flex-row justify-center items-center">
      <button on:click={() => goto("/projects")} on:keypress class="button p-2 bg-sky-400 text-white">
        My Projects {">"}
      </button>
    </section>
    <section in:fly={{ y: 100, duration: 800 }} class=" flex items-start flex-col gap-3 w-full">
      <h3 >👨‍💻 Work Experience</h3>
      <TimelineComponent data={data.data.work} />
    </section>
    <section in:fly={{ y: 100, duration: 900 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 >⭐ Award & Compentition</h3>
      <AwardComponent data={data.data.award} />
    </section>
    <section in:fly={{ y: 100, duration: 1000 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 >🎓 Education</h3>
      <Education />
    </section>
    <section in:fly={{ y: 100, duration: 1100 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 >✏️ Skills</h3>
      <Skill />
    </section>
    <section in:fly={{ y: 100, duration: 1200 }} class="w-full flex flex-row justify-center items-center">
      <a href="/Sakchai-Resume.pdf" target="_blank" class="button p-2 bg-sky-400 text-white">
        My Resume {">"}
      </a>
    </section>
  </div>
</PageComponent>

<style>
  .content-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }

  .button {
    font-weight: bold;
    font-size: 1rem;
    border-radius: 0.5rem;
    user-select: none;
  }

  .button:hover {
    cursor: pointer;
  }

  .topic-under-line {
    border-bottom: 0.2rem solid black;
  }
</style>
