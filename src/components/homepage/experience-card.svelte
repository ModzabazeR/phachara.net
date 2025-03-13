<script lang="ts">
  import type { Card } from "../../app";

  let experience: Card = $props();
</script>

<div
  class="group p-4 md:p-6 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col">
      <h3 class="text-lg md:text-xl font-bold">
        {experience.title}
      </h3>
      <span class="text-zinc-400 text-sm">{experience.year}</span>
    </div>
    {#if experience.subtitle}
      <p class="text-gray-400 text-xs">{experience.subtitle}</p>
    {/if}
    <p class="text-gray-300 text-sm">
      {experience.description}
    </p>
    <div class="flex flex-wrap gap-2 mt-2">
      {#each experience.tags as tag}
        <span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs">
          {tag}
        </span>
      {/each}
    </div>
  </div>
</div>
