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
  class="min-h-dvh flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-center relative py-16 px-8"
>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold w-full">Experiences</h2>
  <div class="w-full relative">
    <!-- Timeline line -->
    <div
      class="absolute left-4 md:left-1/2 h-full w-0.5 bg-zinc-700 -translate-x-1/2"
    ></div>

    <div class="flex flex-col gap-8">
      {#each experiences as experience, i}
        <div
          class="flex items-start md:items-center relative {i % 2 === 0
            ? 'md:flex-row'
            : 'md:flex-row-reverse'}"
        >
          <!-- Timeline dot -->
          <div
            class="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 md:mt-0"
          >
            <div class="h-4 w-4 rounded-full bg-zinc-700"></div>
          </div>

          <!-- Card container -->
          <div class="w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0">
            <ExperienceCard {...experience} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
