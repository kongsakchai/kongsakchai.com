<script lang="ts">
  export let onClick: () => void;
  export let title: string | undefined = undefined;
  export let active: boolean;
</script>

<button {title} class={`btn hover:bg-hover focus:bg-focus active:bg-active ${active && "bg-focus"} transition-all duration-500`} on:click={onClick}>
  <slot />
</button>

<style>
  .btn {
    padding: 0.5rem 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 999px;
    flex-wrap: nowrap;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
  }
</style>
