<script lang="ts">
  import { crossfade } from "@utils/crossfade";

  export let path: string;
  const [send, receive] = crossfade;
</script>

<nav class=" bg-white fixed top-0 left-0 w-screen flex flex-row justify-between items-center py-4 px-12 shadow-lg">
  <a title="KongSakchai" href="/"
    ><h3
      class="text-left whitespace-nowrap font-mplush font-bold"
      in:receive={{ key: "myname" }}
    >
      Kong 🧑‍💻
    </h3></a
  >
  <div class=" flex flex-row justify-end items-center gap-5 text-base">
    <a title="Projects" href="/projects" class={`${path.includes("/projects") && "font-bold"}`}>Projects</a>
    <a title="Blogs" href="/blogs" class={`${path.includes("/blogs") && "font-bold"}`}>Blogs</a>
    <a title="Introduct" href="/intro" class={`${path === "/intro" && "font-bold"}`}>Introduce</a>
    <a
      title="My Github"
      in:receive={{ key: "github" }}
      out:send={{ key: "github" }}
      rel="noreferrer"
      href="https://github.com/kongsakchai"
      target="_blank"
      class=" hover:-rotate-12 transition-all"
    >
      <img src="/icons/github-mark.svg" alt="github" class=" w-7" />
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
      <img src="/icons/linkedin-icon.svg" alt="likedin" class=" w-8" />
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
      <img src="/icons/email.svg" alt="likedin" class=" w-8" />
    </a>
  </div>
</nav>
<div class=" text-sm" />
<slot />

