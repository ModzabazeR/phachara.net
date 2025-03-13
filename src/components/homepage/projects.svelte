<script lang="ts">
  import type { Card } from "../../app";
  import ProjectCard from "./project-card.svelte";

  import allaboutyourbirthday from "$lib/images/allaboutyourbirthday.png";
  import nierlocalizer from "$lib/images/nierlocalizer.png";
  import nova from "$lib/images/nova.png";
  import nier from "$lib/images/nier.png";
  import bifrost from "$lib/images/bifrost.png";
  import cicada from "$lib/images/cicada.png";
  import tokonto from "$lib/images/tokonto.png";
  import caic from "$lib/images/caic.jpg";

  import { sortCards } from "$lib/utils/components";

  const projects: Card[] = [
    {
      title: "Game Localization Platform",
      description:
        "A collaborative web application enabling community-driven translation of Nier Automata game content from English/Japanese to Thai, featuring suggestion/approval workflows and role-based permissions.",
      year: "2024",
      href: "https://nierautomatath.vercel.app",
      tags: ["SvelteKit", "Tailwind CSS", "Pocketbase"],
      image: nierlocalizer,
    },
    {
      title: "Document Management System",
      subtitle: "Nova Organic Co., Ltd.",
      description:
        "A web application that digitizes analog documents, enabling seamless transition to a digital platform. It supports various document types, each with distinct editing and approval workflows.",
      year: "2025",
      href: "",
      tags: ["Next.js", "Tailwind CSS", "Elysia.js", "PostgreSQL"],
      image: nova,
    },
    {
      title: "All About Your Birthday",
      description:
        "A web application that allows users to input their birthdate and display facts for the date, including hiralious florida man news.",
      year: "2023",
      href: "https://app.phachara.net/",
      tags: ["SvelteKit", "Tailwind CSS", "Mongo DB", "Docker"],
      image: allaboutyourbirthday,
    },
    {
      title: "NieR Automata: [ก]ew game",
      description:
        "Dived deep into creating a Thai patch for NieR: Automata, involving reverse engineering, analyzing file structures, and scripting. It enhanced my understanding of binaries, game engines, and Thai language processing in computers.",
      year: "2024",
      href: "https://niernewgame.notion.site",
      tags: ["Python", "Shell Script", "Hex Editor", "Custom Tools"],
      image: nier,
    },
    {
      title: "Operation Bifrost",
      description:
        "Leading a fan translation project to localize Steins;Gate, a renowned visual novel, into Thai. The project involves translating all game content including dialogues, tips, assets, and cutscenes, serving the Thai gaming community where no official translation exists.",
      year: "2021",
      href: "https://www.operationbifrost.com",
      tags: ["Python", "C++", "Hex Editor", "Custom Tools"],
      image: bifrost,
    },
    {
      title: "Enneagram Online Exhibition",
      description:
        "Developed an online exhibition website focused on the Enneagram personality system, featuring interactive elements like personality tests and problem-solving flows. Implemented user journey paths for nine personality types using React.",
      year: "2021",
      href: "https://cicada-website.web.app/",
      tags: ["React", "Tailwind CSS", "Firebase"],
      image: cicada,
    },
    {
      title: "What Does Programmer Do?",
      description:
        "Developed an online exhibition website focused on the Enneagram personality system, featuring interactive elements like personality tests and problem-solving flows. Implemented user journey paths for nine personality types using React.",
      year: "2018",
      href: "https://modzabazer.github.io/WhatDoesProgrammerDo/",
      tags: ["HTML", "CSS", "Javascript"],
      image: tokonto,
    },
    {
      title: "DocJuice",
      description:
        "An application that helps you do accounting tasks easily as drinking the juice. The project from CP ALL CAI Camp 2019",
      year: "2021",
      href: "",
      tags: ["Python", "Qt5", "RegEx", "Google Cloud"],
      image: caic,
    },
  ].sort(sortCards);
</script>

<section
  id="projects"
  class="min-h-dvh flex flex-col md:flex-col-reverse gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-center relative py-16 px-8"
>
  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold md:text-right w-full">
    Projects
  </h2>
  <div class="w-full h-[70%]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>
