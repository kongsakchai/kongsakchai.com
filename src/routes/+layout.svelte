<script lang="ts">
  import "./styles.css";
  import "@fontsource/nunito/400.css";
  import "@fontsource/nunito/500.css";
  import "@fontsource/nunito/700.css";
  import "@fontsource/nunito/700-italic.css";
  import { onMount } from "svelte";
  import Navbar from "@components/layout/navbar.svelte";
  import { page } from "$app/stores";

  let onNavbar = false;

  onMount(() => {
    document.title = "Kong Sakchai";
  });
</script>

{#if $page.url.pathname !== "/intro"}
  <Navbar />
{/if}

<slot />
