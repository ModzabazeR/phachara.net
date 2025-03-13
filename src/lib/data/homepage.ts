import { sortCards } from "$lib/utils/components";
import type { Card } from "../../app";

import allaboutyourbirthday from "$lib/images/allaboutyourbirthday.png";
import nierlocalizer from "$lib/images/nierlocalizer.png";
import nova from "$lib/images/nova.png";
import nier from "$lib/images/nier.png";
import bifrost from "$lib/images/bifrost.png";
import cicada from "$lib/images/cicada.png";
import tokonto from "$lib/images/tokonto.png";
import caic from "$lib/images/caic.jpg";
import cscamp16 from "$lib/images/cscamp16.jpg";

export const experiences: Card[] = [
  {
    title: "Co-Project Manager",
    description: "Manage projects at Science KMITL Digital Transformation Team",
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

export const projects: Card[] = [
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
    description:
      "An internal web for Nova Organic Co., Ltd. A web application that digitizes analog documents, enabling seamless transition to a digital platform. It supports various document types, each with distinct editing and approval workflows.",
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
      "First website project inspired by a two-week job shadowing experience at SCAP Solutions. Explores daily life and responsibilities of professional programmers.",
    year: "2018",
    href: "https://modzabazer.github.io/WhatDoesProgrammerDo/",
    tags: ["HTML", "CSS", "Javascript"],
    image: tokonto,
  },
  {
    title: "DocJuice",
    description:
      "An application that helps you do accounting tasks easily as drinking the juice. The project from CP ALL CAI Camp 2021",
    year: "2021",
    href: "",
    tags: ["Python", "Qt5", "RegEx", "Google Cloud"],
    image: caic,
  },
  {
    title: "CS Camp 16 Website",
    subtitle: "Only frontend demo available",
    description:
      "Developed the official website for CS KMITL Camp 16, a hands-on computer science workshop for high school students. The site facilitates camp registration and provides information about computer science fundamentals, problem-solving activities, and collaborative learning experiences.",
    year: "2023",
    href: "https://cscamp-16-front-coming-soon-git-dev-modzabazer.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Express.js", "MySQL"],
    image: cscamp16,
  },
].sort(sortCards);
