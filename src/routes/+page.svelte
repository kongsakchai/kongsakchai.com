<script lang="ts">
  import Intro from "../components/firstPage/intro.svelte";
  import Profile from "../components/firstPage/profile.svelte";
  import { crossfade } from "../utils/crossfade";

  const [send, receive] = crossfade;

  let profile = false;
</script>

{#if !profile}
  <Intro {send} {receive} bind:profile />
{:else}
  <Profile {send} {receive} />
{/if}
