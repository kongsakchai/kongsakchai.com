<script lang="ts">
  import "./styles.css";
  import "@fontsource/prompt/400.css";
  import "@fontsource/prompt/600.css";
  import "@fontsource/m-plus-rounded-1c/400.css";
  import "@fontsource/m-plus-rounded-1c/700.css";
  import "@fontsource/m-plus-rounded-1c/500.css";

  import { onMount } from "svelte";

  const changeTitle = (str: string) => (document.title = str);

  onMount(() => {
    document.title = "Kong Sakchai";
  });
</script>

<svelte:window on:blur={() => changeTitle("I Waitting For You🥹")} on:focus={() => changeTitle("Kong Sakchai")} />

<main>
  <slot />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
