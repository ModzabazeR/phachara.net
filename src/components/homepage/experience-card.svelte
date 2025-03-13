<script lang="ts">
  import type { Card } from "../../app";

  let experience: Card = $props();
</script>

<div
  class="group flex flex-col gap-4 md:gap-8 p-4 md:p-8 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 cursor-pointer"
>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-bold">
      {experience.title}
    </h3>
    {#if experience.subtitle}
      <p class="text-gray-400 text-xs">{experience.subtitle}</p>
    {/if}
    <p class="text-gray-300 line-clamp-2 group-hover:line-clamp-none text-sm">
      {experience.description}
    </p>
    <p class="text-gray-300 text-sm">{experience.year}</p>
    <div class="flex flex-wrap gap-2">
      {#each experience.tags as tag}
        <span
          class="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs cursor-pointer"
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>
</div>
