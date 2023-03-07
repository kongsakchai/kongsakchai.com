<script lang="ts">
  import { crossfade } from "@utils/crossfade";
  import { fade } from "svelte/transition";

  const [send, receive] = crossfade;
</script>

<div class="page">
  <div class="content-1 font-bold lg:w-1/3 w-[55%] my-[250px]">
    <section class=" flex justify-between items-center w-full gap-8">
      <section class=" flex items-start flex-col gap-2">
        <h1 class=" ">Sakchai Paoin</h1>
        <p class=" ">Full-Stack Developer.</p>
      </section>
      <img
        in:receive={{ key: "profile" }}
        out:send={{ key: "profile" }}
        src="/profile.jpg"
        class=" rounded-full aspect-square w-[100px]"
        alt="profile"
      />
    </section>
    <section class=" flex items-start flex-col gap-2 w-full">
      <h3 class=" underline">About</h3>
      <p class=" font-medium">
        &emsp I am Sakchai Paoin, currently a 3rd-year Computer Engineering student at KMUTT. My journey with coding
        began in 2015, and ever since, I have been enthusiastic about exploring new technologies. As a passionate
        learner, I constantly seek out new challenges to enhance my skills and thrive as a Developer.
      </p>
    </section>
    <section class=" flex items-start flex-col gap-2 w-full">
      <h3 class=" underline">Work Experience</h3>
      <p class=" font-medium">- Freelance Web Developer.</p>
      <p class=" font-medium">- Unity Engine Workshop Speaker @ Satri Angthong School.</p>
      <p class=" font-medium">- Studying @ EsicLab.</p>
    </section>
    <section class=" flex items-start flex-col gap-2 w-full">
      <h3 class=" underline">Award & Compentition</h3>
      <p class=" font-medium">National Software Contest 24</p>
      <p class=" font-medium">Magic Hackathon</p>
      <p class=" font-medium">National Software Contest 22</p>
      <p class=" font-medium">Tokla 7th</p>
      <p class=" font-medium">Tokla 6th</p>
    </section>
    <section class=" flex items-start flex-col gap-2 w-full">
      <h3 class=" underline">Education</h3>
      <p class=" font-medium">Bachelor Degree (Year 3).</p>
      <p class=" font-medium">High School</p>
    </section>
  </div>
</div>

<style>
  .content-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  }
</style>
