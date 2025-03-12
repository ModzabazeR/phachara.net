<script lang="ts">
  import { fade } from "svelte/transition";
  import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
  <title>Phachara Chirapakachote</title>
  <meta name="description" content="Phachara Chirapakachote's Portfolio" />
</svelte:head>

<Navbar />
<section class="h-dvh flex justify-center items-center">
  <div
    transition:fade={{ duration: 800 }}
    class="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-6 text-center px-4"
  >
    <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
      Phachara Chirapakachote
    </h1>
    <h4 class="lg:text-lg text-gray-600 dark:text-gray-300 tracking-wide">
      Full-stack Web Developer | Project Manager | Cybersecurity Enthusiast
    </h4>
  </div>
</section>
