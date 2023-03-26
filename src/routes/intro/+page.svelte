<script lang="ts">
  import Intro from "@components/intro/intro.svelte";
  import Profile from "@components/intro/profile.svelte";
  import PageComponent from "@components/layout/pageComponent.svelte";
  let profile = false;
</script>

<PageComponent justify="center" align="center">
  {#if !profile}
    <Intro bind:profile />
  {:else}
    <Profile />
  {/if}
</PageComponent>
