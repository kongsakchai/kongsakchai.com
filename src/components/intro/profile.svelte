<script lang="ts">
  import { crossfade } from "@utils/crossfade";
  import { fade } from "svelte/transition";

  const [send, receive] = crossfade;

  let absolute = false;
</script>

<div class={`content-1 font-mplus font-bold ${absolute && "absolute"}`}>
  <img
    in:fade={{ delay: 1200 }}
    out:send={{ key: "profile" }}
    src="/profile.jpg"
    class=" rounded-full aspect-square w-[150px]"
    alt="profile"
  />
  <section class=" content-2">
    <h1 in:receive={{ key: "myname" }} out:send={{ key: "myname" }} class="name-3">I'm Kong 🧑‍💻</h1>
    <p in:fade={{ delay: 1200 }} out:fade class=" text-lg font-normal">(Sakchai Paoin) Full-Stack Developer</p>
    <section class=" flex flex-row justify-start items-center gap-3">
      <a
        title="My Github"
        in:fade={{ delay: 1300 }}
        out:send={{ key: "github" }}
        rel="noreferrer"
        href="https://github.com/kongsakchai"
        target="_blank"
        class=" hover:-rotate-12 transition-all"
      >
        <img src="/icons/github-mark.svg" alt="github" class=" w-8" />
      </a>
      <a
        title="My LinkedIn"
        in:fade={{ delay: 1400 }}
        out:send={{ key: "linkedin", delay: 100 }}
        rel="noreferrer"
        href="https://www.linkedin.com/in/sakchai-paoin"
        target="_blank"
        class=" hover:rotate-12 transition-all"
      >
        <img src="/icons/linkedin-icon.svg" alt="likedin" class=" w-9" />
      </a>
      <a
        title="My Email"
        in:fade={{ delay: 1500 }}
        out:send={{ key: "email", delay: 200 }}
        rel="noreferrer"
        href="mailto:kongs.sakchaii@gmail.com"
        target="_blank"
        class="hover:-rotate-12 transition-all"
      >
        <img src="/icons/email.svg" alt="likedin" class=" w-9" />
      </a>
      <a
        title="Next"
        href="/"
        on:click={() => (absolute = true)}
        in:fade={{ delay: 1600 }}
        out:fade
        class=" hover:translate-x-1 transition-all"
      >
        <img src="/icons/arrow.svg" alt="next" class=" w-9" />
      </a>
    </section>
  </section>
</div>

<style>
  .content-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    user-select: none;
  }

  .content-2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    user-select: none;
  }

  .email-popup {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5a5a5a;
    border-radius: 999px;
    color: white;
    overflow: hidden;
    transition: all 500ms;
  }

  .email-popup:hover {
    outline: none;
    text-decoration: none;
    width: 15rem;
  }

  .email-popup > :nth-child(odd) {
    overflow: hidden;
    max-width: 0%;
    transition: all 0ms;
    transition-delay: 0ms;
  }

  .email-popup:hover > :nth-child(odd) {
    max-width: 100%;
    transition: all 1000ms;
    transition-delay: 300ms;
  }
</style>
