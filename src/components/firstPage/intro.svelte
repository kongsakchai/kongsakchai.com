<script lang="ts">
  import "@fontsource/prompt/400.css";
  import "@fontsource/prompt/600.css";
  import "./animation.css";
  import { fade } from "svelte/transition";
  import { onMount, afterUpdate } from "svelte";

  export let send: any;
  export let receive: any;
  export let profile: boolean;

  let step = 0;
  const next = () => {
    step++;
    console.log(step);
    if (step < 4) setTimeout(() => next(), 1500);
  };

  const onStart = () => {
    if (step == 0) next();
  };

  $: animation = (name: string, limit: number) => {
    if (step > limit) return `${name}-${limit}`;
    return `${name}-${step}`;
  };

  $: if (step >= 4) {
    profile = true;
    console.log(profile);
  }
</script>

<svelte:window on:click={onStart} />

<div class={`content-1 ${animation("section", 3)} absolute`} transition:fade>
  <h1 class={`hello ${animation("hello", 3)}`}>Hello</h1>
  <h1>
    <div class={`${animation("welcome", 3)} inline-block`}>Welcome to</div>
    <div class={`${animation("my-website", 3)} inline-block`}>My website</div>
  </h1>
  <h1 in:receive={{ key: "myname" }} out:send={{ key: "myname" }} class={`${animation("name", 3)}`}>I'm Kong 🧑‍💻</h1>
</div>

<style>
  .content-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: "Prompt";
    font-weight: 600;
    user-select: none;
  }

  .hello::after {
    content: "👋";
    position: absolute;
  }
</style>
