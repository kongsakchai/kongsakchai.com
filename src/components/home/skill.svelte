<script lang="ts">
  let languages = ["TypeScript", "JavaScript", "CShap", "HTML", "CSS", "SQL", "JAVA", "CPlush", "C"];
  let framworks = [
    "ReactJS",
    "React-Native",
    "NextJS",
    "Svelte",
    "NodeJS",
    "TailwindCSS",
    "Expressjs",
    "SocketIO",
    "TreeJS",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Nginx",
    "Docker",
    "Unity",
  ];
</script>

<section>
  <p class=" font-bold ">Language</p>
  <div class=" w-full flex flex-row flex-wrap gap-5 font-normal mt-3">
    {#each languages as item}
      <img title={item} src={`/images/languages/${item.toLowerCase()}.png`} alt={item} class="h-[45px]" />
    {/each}
  </div>
</section>
<section>
  <p class=" font-bold mt-3">Framworks & Tools</p>
  <div class=" w-full flex flex-row flex-wrap gap-5 font-normal mt-3">
    {#each framworks as item}
      <img title={item}  src={`/images/frameworks/${item.toLowerCase()}.png`} alt={item} class="h-[45px]" />
    {/each}
  </div>
</section>
