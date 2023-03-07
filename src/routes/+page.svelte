<script lang="ts">
  import Home from "src/routes/home/+page.svelte";
  import Intro from "@components/intro/intro.svelte";
  import Profile from "@components/intro/profile.svelte";
  let profile = false;
</script>

{#if !profile}
  <Intro bind:profile />
{:else}
  <Profile />
{/if}
