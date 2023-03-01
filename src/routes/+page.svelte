<script lang="ts">
  import Intro from "../components/firstPage/intro.svelte";
  import Profile from "../components/firstPage/profile.svelte";
  import { crossfade, scale } from "svelte/transition";
  import { linear } from "svelte/easing";

  const [send, receive] = crossfade({ duration: 1200 });

  let profile = false;
</script>

{#if !profile}
  <Intro {send} {receive} bind:profile />
{:else}
  <Profile {send} {receive} />
{/if}

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

  .myname::after {
    content: "🧑‍💻";
    position: absolute;
  }
</style>
