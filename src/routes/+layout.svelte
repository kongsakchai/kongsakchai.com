<script lang="ts">
  import "./styles.css";
</script>

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
