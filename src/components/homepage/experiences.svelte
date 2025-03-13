<script lang="ts">
  import { experiences } from "$lib/data/homepage";
  import ExperienceCard from "./experience-card.svelte";
  import { onMount } from "svelte";

  let matchesMediaQuery = false;

  onMount(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    matchesMediaQuery = mediaQuery.matches;

    mediaQuery.addEventListener("change", (e) => {
      matchesMediaQuery = e.matches;
    });
  });
</script>

<section
  id="experiences"
  class="min-h-dvh flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-center relative py-12 px-6"
>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold w-full">Experiences</h2>
  <div class="w-full max-w-4xl mx-auto relative">
    <!-- Timeline line -->
    <div
      class="absolute left-3 md:left-1/2 h-full w-0.5 bg-zinc-700 -translate-x-1/2"
    ></div>

    <div class="flex flex-col gap-8 md:gap-0">
      {#each experiences as experience, i}
        <div
          class="flex items-start relative {i % 2 === 0
            ? 'md:flex-row'
            : 'md:flex-row-reverse'} {i !== 0 ? 'md:-mt-16' : ''}"
        >
          <!-- Timeline dot -->
          <div
            class="absolute left-3 md:left-1/2 -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2"
          >
            <div class="h-3 w-3 rounded-full bg-zinc-700"></div>
          </div>

          <!-- Card container -->
          <div
            class="w-[calc(100%-2.5rem)] md:w-[45%] ml-10 md:ml-0 hover:z-10 transition-all duration-200"
          >
            <ExperienceCard {...experience} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
