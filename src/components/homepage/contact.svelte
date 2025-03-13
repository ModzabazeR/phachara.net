<script lang="ts">
  import ContactCard from "./contact-card.svelte";

  const contacts = [
    {
      title: "GitHub",
      href: "https://github.com/ModzabazeR",
      icon: "mdi:github",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/phachara-chirapakachote-a75737181/",
      icon: "mdi:linkedin",
    },
    {
      title: "Medium",
      href: "https://medium.com/@modzabazer",
      icon: "mdi:medium",
    },
    {
      title: "Email",
      href: "mailto:moddaeng.phachara@gmail.com",
      icon: "mdi:email",
    },
  ];
</script>

<section
  id="contact"
  class="h-dvh flex flex-col justify-center items-center gap-y-8"
>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Contact</h2>
  <div class="grid grid-cols-2 gap-4 md:gap-6">
    {#each contacts as contact}
      <ContactCard {...contact} />
    {/each}
  </div>
</section>
