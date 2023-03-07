<script>
  import { crossfade } from "@utils/crossfade";

  const [send, receive] = crossfade;
</script>

<nav class=" bg-white fixed top-0 left-0 w-screen flex flex-row justify-between items-center py-4 px-12 border-b-2">
  <h2
    class="text-left whitespace-nowrap font-mplush font-bold"
    in:receive={{ key: "myname" }}
    out:send={{ key: "myname" }}
  >
    Kong 🧑‍💻
  </h2>
  <div class=" flex flex-row justify-end items-center gap-3">
    <a
      title="My Github"
      in:receive={{ key: "github" }}
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
      in:receive={{ key: "linkedin", delay: 100 }}
      out:send={{ key: "linkedin" }}
      rel="noreferrer"
      href="https://www.linkedin.com/in/sakchai-paoin"
      target="_blank"
      class=" hover:rotate-12 transition-all"
    >
      <img src="/icons/linkedin-icon.svg" alt="likedin" class=" w-9" />
    </a>
    <a
      title="My Email"
      in:receive={{ key: "email", delay: 200 }}
      out:send={{ key: "email" }}
      rel="noreferrer"
      href="mailto:kongs.sakchaii@gmail.com"
      target="_blank"
      class="hover:-rotate-12 transition-all"
    >
      <img src="/icons/email.svg" alt="likedin" class=" w-9" />
    </a>
  </div>
</nav>
<slot />

<style>
  .email {
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
</style>
