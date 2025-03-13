<script lang="ts">
  import { cubicInOut } from "svelte/easing";
  import Experiences from "../components/homepage/experiences.svelte";
  import Navbar from "../components/homepage/navbar.svelte";
  import Projects from "../components/homepage/projects.svelte";

  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Contact from "../components/homepage/contact.svelte";

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Phachara Chirapakachote</title>
  <meta name="description" content="Phachara Chirapakachote's Portfolio" />
</svelte:head>

<Navbar />
<section class="h-dvh flex justify-center items-center" id="home">
  {#if visible}
    <div
      class="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-6 text-center px-8"
      in:fly={{
        duration: 1000,
        delay: 0,
        y: 10,
        easing: cubicInOut,
      }}
    >
      <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
        Phachara Chirapakachote
      </h1>
      <h4 class="lg:text-lg text-gray-600 dark:text-gray-300 tracking-wide">
        Full-stack Web Developer | Project Manager | Cybersecurity Enthusiast
      </h4>
    </div>
  {/if}
</section>

<Experiences />

<Projects />

<Contact />

<!-- sweet footer -->
<footer class="text-center py-8 text-sm text-gray-600 dark:text-gray-400">
  <p>
    &copy; {new Date().getFullYear()} Phachara Chirapakachote. All rights reserved.
  </p>
</footer>
