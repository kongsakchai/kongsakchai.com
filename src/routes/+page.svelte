<script lang="ts">
  import { goto } from "$app/navigation";
  import { crossfade } from "@utils/crossfade";
  import { fade, fly } from "svelte/transition";

  import AwardComponent from "@components/home/award.svelte";
  import TimelineComponent from "@components/home/timeline.svelte";
  import Skill from "@components/home/skill.svelte";
  import Education from "@components/home/education.svelte";
  import type { PageData } from "./$types";

  const [send, receive] = crossfade;
  export let data: PageData;
</script>

<div class="page" out:fade={{ duration: 500 }}>
  <div class="content-1 font-bold xl:w-1/3 lg:w-1/2 w-[55%] my-[250px]">
    <section class=" flex justify-between items-center w-full gap-8">
      <section class=" flex items-start flex-col gap-2">
        <h1 class=" ">Sakchai Paoin</h1>
        <p class="font-normal text-base">Full-Stack Developer</p>
      </section>
      <img
        in:receive={{ key: "profile" }}
        out:send={{ key: "profile" }}
        src="/profile.jpg"
        class=" rounded-full aspect-square w-[100px]"
        alt="profile"
      />
    </section>
    <section in:fly={{ delay: 500, y: 100, duration: 1000 }} class=" flex items-start flex-col gap-3 w-full">
      <h3 class="topic-under-line">About</h3>
      <p class=" font-normal">
        &emsp I am Sakchai Paoin, a 3rd-year Computer Engineering student at KMUTT. My coding journey began in 2015, and
        I have been passionate about learning new technologies ever since. I am constantly looking for new challenges to
        improve my skills as a developer.
      </p>
    </section>
    <section in:fly={{ delay: 600, y: 100, duration: 1000 }} class="w-full flex flex-row justify-center items-center">
      <div on:click={() => goto("/projects")} on:keypress class="button p-2 bg-red-400 text-white">
        My Projects {">"}
      </div>
    </section>
    <section in:fly={{ delay: 700, y: 100, duration: 1000 }} class=" flex items-start flex-col gap-3 w-full">
      <h3 class="topic-under-line">Work Experience</h3>
      <TimelineComponent data={data.data.work} />
    </section>
    <section in:fly={{ delay: 800, y: 100, duration: 1000 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 class="topic-under-line">Award & Compentition</h3>
      <AwardComponent data={data.data.award} />
    </section>
    <section in:fly={{ delay: 900, y: 100, duration: 1000 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 class="topic-under-line">Education</h3>
      <!-- <TimelineComponent data={data.education} /> -->
      <Education />
    </section>
    <section in:fly={{ delay: 1000, y: 100, duration: 1000 }} class=" flex items-start flex-col gap-2 w-full">
      <h3 class="topic-under-line">Skills</h3>
      <Skill />
    </section>
  </div>
</div>

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
