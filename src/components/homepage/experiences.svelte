<script lang="ts">
  import { sortCards } from "$lib/utils/components";
  import type { Card } from "../../app";
  import ExperienceCard from "./experience-card.svelte";

  const experiences: Card[] = [
    {
      title: "Co-Project Manager",
      description:
        "Manage projects at Science KMITL Digital Transformation Team",
      year: "2024 - Present",
      href: "",
      tags: ["Project Management", "Web Development"],
      image: "",
    },
    {
      title: "Coordinator & Speaker",
      description: "CS KMITL Hacklab, a cybersecurity passion group",
      year: "2024 - Present",
      href: "",
      tags: ["Cybersecurity", "Knowledge Sharing", "CTF"],
      image: "",
    },
    {
      title: "Head of Web Development",
      description: "Lead the Web Development team for KMITL CS Camp 16",
      year: "2023",
      href: "",
      tags: ["Next.js", "Tailwind CSS", "Express.js", "MySQL"],
      image: "",
    },
    {
      title: "ISAG CTF 2025",
      description:
        "Competed in the KMITL’s ISAG CTF 2025, and achieved 6th place out of 20 teams.",
      year: "2025",
      href: "",
      tags: ["Cybersecurity", "CTF"],
      image: "",
    },
    {
      title: "STDiO CTF 2024",
      description:
        "Advanced to the final round of the 2600TH STDiO CTF 2024, securing 8th place out of 20 teams.",
      year: "2024",
      href: "",
      tags: ["Cybersecurity", "CTF"],
      image: "",
    },
    {
      title: "Developer & Content Creator",
      description:
        "Developed and created content for Hareshi, a one-stop platform for legal anime streaming in Thailand",
      year: "2019 - Present",
      href: "",
      tags: ["Web Development", "Content Creation"],
      image: "",
    },
  ].sort(sortCards);
</script>

<section
  id="experiences"
  class="min-h-dvh flex flex-col md:flex-col-reverse gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-center relative py-16 px-8"
>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold md:text-right w-full">
    Experiences
  </h2>
  <div class="w-full h-[70%]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {#each experiences as experience}
        <ExperienceCard {...experience} />
      {/each}
    </div>
  </div>
</section>
