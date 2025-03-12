<script lang="ts">
  const menus = [
    { name: "Home", href: "#" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  function scrollToSection(event: MouseEvent, href: string) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav
  class="fixed top-5 left-1/2 -translate-x-1/2 border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm p-4 rounded-3xl min-w-md max-w-lg shadow-lg"
>
  <ul class="flex justify-center gap-x-6">
    {#each menus as { name, href }}
      <li>
        <a
          {href}
          on:click={(e) => scrollToSection(e, href)}
          class="text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
          >{name}</a
        >
      </li>
    {/each}
  </ul>
</nav>
