<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Card } from "../../app";

  let project: Card = $props();
</script>

<a
  class="group flex items-center gap-4 md:gap-8 p-4 md:p-8 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 cursor-pointer
         transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 hover:scale-[1.01] hover:shadow-xl"
  href={project.href !== "" ? project.href : undefined}
  target={project.href !== "" ? "_blank" : undefined}
>
  <!-- TODO: Implement proper UX/UI for the image in small screens -->
  <img
    src={project.image}
    alt={project.title}
    class="hidden md:block h-30 w-auto aspect-square object-cover rounded-lg
           transition-transform duration-300 group-hover:scale-[1.01]"
  />
  <div class="flex flex-col gap-2">
    <h3
      class="text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300"
    >
      {project.title}
    </h3>
    {#if project.subtitle}
      <p class="text-gray-400 text-xs">{project.subtitle}</p>
    {/if}
    <p
      class="text-gray-300 line-clamp-2 text-sm group-hover:text-gray-100 transition-colors duration-300"
    >
      {project.description}
    </p>
    <p class="text-gray-300 text-sm">{project.year}</p>
    <div class="flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span
          class="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs cursor-pointer
                 transition-all duration-300 hover:bg-gray-700 hover:text-gray-100"
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>
</a>
