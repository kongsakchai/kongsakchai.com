<script lang="ts">
  import "@fontsource/prompt/400.css";
  import "@fontsource/prompt/600.css";
  import { fade, fly } from "svelte/transition";
  import { afterUpdate, onMount } from "svelte";

  export let send: any;
  export let receive: any;
  export let profile: boolean;

  let step = 0;

  const nextStep = () => {
    step++;
    if (step < 3) setTimeout(nextStep, 2000);
    else profile = true;
  };

  const start = () => {
    if (step == 0) nextStep();
  };

</script>

<svelte:window on:click={start} />

<div
  class={`content-1 absolute text-4xl font-semibold duration-500 ${step > 1 && "translate-y-[-50%]"}`}
  transition:fade
>
  <section class={` content-2 duration-500 ${step > 0 && "translate-x-[-100%]"} ${step > 1 && " text-3xl opacity-50"}`}>
    <span>Hello</span>
    <span>
      {#if step == 0}
        <div class=" absolute text-left" out:fly={{ y: -20, delay: 500 }}>👋</div>
      {:else}
        <div class=" absolute text-left whitespace-nowrap" in:fly={{ y: 20, delay: 500 }} out:send={{ key: "myname" }}>
          I'm Kong 🧑‍💻
        </div>
      {/if}
    </span>
  </section>
  <span class={` ${step > 1 ? "opacity-100" : "opacity-0"} duration-500 delay-500`}>Welcome to My website</span>
</div>

<style>
  .content-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .content-2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 1rem;
  }
</style>
