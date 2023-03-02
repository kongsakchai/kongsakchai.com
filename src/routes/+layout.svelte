<script lang="ts">
  import { onMount } from "svelte";
  import "./styles.css";

  let docTitle: string;

  const changeTitle = (str: string) => {
    document.title = str;
  };

  onMount(() => {
    docTitle = document.title;
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
