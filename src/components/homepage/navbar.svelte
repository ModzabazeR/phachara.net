<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  const menus = [
    { name: "Home", href: "#home" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  let hideTimeout: number; // timeout id
  let isVisible = true;

  function scrollToSection(event: MouseEvent, href: string) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function showNavbar() {
    isVisible = true;
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      isVisible = false;
    }, 2000);
  }

  onMount(() => {
    showNavbar();
    window.addEventListener("mousemove", showNavbar);
    return () => {
      window.removeEventListener("mousemove", showNavbar);
      clearTimeout(hideTimeout);
    };
  });
</script>

{#if isVisible}
  <nav
    class="fixed hidden md:block top-5 left-1/2 -translate-x-1/2 border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm p-4 rounded-3xl min-w-md max-w-lg shadow-lg z-99 transition-opacity duration-300"
    transition:fade
  >
    <ul class="flex justify-center gap-x-6">
      {#each menus as { name, href }}
        <li>
          <a
            {href}
            onclick={(e) => scrollToSection(e, href)}
            class="text-zinc-400 hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300"
            >{name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
{/if}
