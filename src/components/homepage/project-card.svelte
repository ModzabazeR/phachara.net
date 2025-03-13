<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import type { Card } from "../../app";
  import { expandedProjectId } from "$lib/stores/ui";
  import Icon from "@iconify/svelte";

  let project: Card = $props();

  const isExpanded = $derived($expandedProjectId === project.title);

  function toggleExpand() {
    $expandedProjectId = isExpanded ? null : project.title;
  }
</script>

<div class="relative {isExpanded ? 'z-10' : 'z-0'}">
  <button
    onclick={toggleExpand}
    class="w-full cursor-pointer text-left group flex items-center gap-4 md:gap-8 p-4 md:p-8 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700
           transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 hover:scale-[1.01] hover:shadow-xl
           {isExpanded ? 'bg-zinc-800 border-zinc-600' : ''}"
  >
    <img
      src={project.image}
      alt={project.title}
      class="hidden md:block h-30 w-auto aspect-square object-cover rounded-lg
             transition-transform duration-300 group-hover:scale-[1.01]"
    />
    <div class="flex flex-col gap-2 flex-1">
      <div class="flex justify-between items-center">
        <h3
          class="text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300"
        >
          {project.title}
        </h3>
        <span class="text-gray-400 text-lg">
          {#if isExpanded}
            <Icon icon="mdi:minus" />
          {:else}
            <Icon icon="mdi:plus" />
          {/if}
        </span>
      </div>
      <p
        class="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300
               {isExpanded ? '' : 'line-clamp-2'}"
      >
        {project.description}
      </p>
      <p class="text-gray-300 text-sm">{project.year}</p>
      <div class="flex flex-wrap gap-2">
        {#each project.tags as tag}
          <span
            class="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs
                   transition-all duration-300 hover:bg-gray-700 hover:text-gray-100"
          >
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </button>

  {#if isExpanded}
    <div
      transition:slide
      class="mt-2 p-4 bg-zinc-800 rounded-lg border border-zinc-600 cursor-pointer"
    >
      {#if project.href}
        <a
          class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors w-full"
          href={project.href}
          target="_blank"
        >
          Visit Project
          {#if project.subtitle}
            ({project.subtitle})
          {/if}
          <Icon icon="mdi:arrow-right" class="text-xl" />
        </a>
      {:else}
        <p
          class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors w-full"
        >
          <Icon icon="mdi:info" class="text-xl" />
          No demo available
        </p>
      {/if}
    </div>
  {/if}
</div>
