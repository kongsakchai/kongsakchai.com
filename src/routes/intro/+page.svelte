<script lang="ts">
  import Intro from "@components/intro/intro.svelte";
  import Profile from "@components/intro/profile.svelte";
  let profile = false;
</script>

<div class=" w-screen h-screen flex justify-center items-center overflow-hidden">
  {#if !profile}
    <Intro bind:profile />
  {:else}
    <Profile />
  {/if}
</div>
