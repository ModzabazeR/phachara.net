<script lang="ts">
  import ProjectCard from "./project-card.svelte";
  import { projects } from "$lib/data/homepage";
</script>

<section
  id="projects"
  class="min-h-dvh flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-center relative py-16 px-8"
>
  <div class="w-full md:text-right">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Projects</h2>
    <p class="text-sm text-gray-400 italic">since 2018</p>
  </div>
  <div class="w-full h-[70%]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>
