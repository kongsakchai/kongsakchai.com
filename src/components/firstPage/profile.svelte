<script lang="ts">
  import "@fontsource/prompt/400.css";
  import "@fontsource/prompt/600.css";
  import { fade } from "svelte/transition";

  export let send: any;
  export let receive: any;
</script>

<div class={`content-1 font-prompt font-semibold`}>
  <img
    transition:fade={{ delay: 1200 }}
    src="/profile.jpg"
    class=" rounded-full aspect-square w-[150px]"
    alt="profile"
  />
  <section class=" content-2">
    <h1 in:receive={{ key: "myname" }} out:send={{ key: "myname" }} class="name-3">I'm Kong 🧑‍💻</h1>
    <p transition:fade={{ delay: 1200 }} class=" text-xl font-normal">(Sakchai Paoin) Front-end developer</p>
    <div transition:fade={{ delay: 1200 }} class="font-normal flex flex-row justify-start items-center gap-3">
      Find me on:
      <a rel="noreferrer" href="https://github.com/kongsakchai" target="_blank">
        <img src="/github-mark.svg" alt="github" class=" w-8" />
      </a>
      <a rel="noreferrer" href="https://github.com/kongsakchai" target="_blank">
        <img src="/linkedin-icon.svg" alt="likedin" class=" w-9" />
      </a>
    </div>
  </section>
</div>

<style>
  .content-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    user-select: none;
  }

  .content-2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    user-select: none;
  }
</style>
