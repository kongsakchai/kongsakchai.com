<script lang="ts">
  import "./markdown.css";
  export let contents: string;
</script>

{#if contents === "404"}
  <h3 class=" font-bold">. . .</h3>
{:else}
  <div class={`mark ${$$props.class}`} bind:innerHTML={contents} contenteditable="false" />
{/if}
