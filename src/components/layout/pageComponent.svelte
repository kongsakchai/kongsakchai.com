<script lang="ts">
  export let justify: "start" | "center" | "end" = "start";
  export let align: "start" | "center" | "end" = "start";
</script>

<main class={` -z-[1] absolute w-screen overflow-auto h-screen flex flex-col justify-${justify} items-${align} ${$$props.class}`}>
  <slot />
</main>
