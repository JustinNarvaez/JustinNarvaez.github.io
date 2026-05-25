import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Astro } from "@/components/ui/svgs/astro";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Justin Felipe Narvaez",
  initials: "JN",
  url: "https://JustinNarvaez.github.io",
  location: "Bogotá, Colombia",
  locationLink: "https://www.google.com/maps/place/Bogotá",
  description:
    "Systems Engineering student passionate about technology, always looking to learn more and apply it to real-world problems.",
  summary:
    "I'm currently in my 5th semester of Systems Engineering at Universidad El Bosque in Bogotá, Colombia. I have a strong interest in databases, backend development, and software architecture. I enjoy working with both relational and non-relational databases, and I'm always looking for new challenges that push me to grow as a developer. Outside of code, I'm passionate about music and technology trends.",
  avatarUrl: "/picofme.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "Here are some of the projects and practices I've worked on during my studies, covering SQL, PL/SQL, and NoSQL databases.",
    },
    hackathons: { order: 7, enabled: false, label: "Hackathons", heading: "Hackathons", text: "" },
    photos: { order: 6, enabled: false, heading: "Photos" },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Feel free to reach out if you want to talk about databases, software development, or just say hi.",
    },
  },
  photos: [],
  skills: [
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "pipenarvaez72004@gmail.com",
    tel: "+573105151590",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JustinNarvaez",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:pipenarvaez72004@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],

  education: [
    {
      school: "Universidad El Bosque",
      href: "https://www.uelbosque.edu.co",
      degree: "Systems Engineering - 5th Semester",
      logoUrl: "https://www.google.com/s2/favicons?domain=uelbosque.edu.co&sz=128",
      start: "2023",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Oracle HR Schema - SQL Queries",
      href: "https://github.com/JustinNarvaez/DataBase2",
      dates: "February 2026",
      active: true,
      description:
        "SQL practice using Oracle's HR schema. Includes multi-table JOINs, GROUP BY aggregations, and filters to query employee data by region, salary range, and job history.",
      technologies: ["Oracle SQL", "HR Schema", "SQL Developer"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/JustinNarvaez/DataBase2/blob/main/Oracle/Basic_SQL_Queries_HR_Justin_Narvaez.sql",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PL/SQL - Functions & Triggers",
      href: "https://github.com/JustinNarvaez/DataBase2",
      dates: "February 2026",
      active: true,
      description:
        "PL/SQL practice on Oracle HR schema. Includes stored functions, procedures, packages, and triggers for salary validation, auditing, and department reporting.",
      technologies: ["PL/SQL", "Oracle", "Triggers", "Packages"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/JustinNarvaez/DataBase2/tree/main/Oracle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MongoDB MQL - sample_airbnb",
      href: "https://github.com/JustinNarvaez/DataBase2",
      dates: "May 2026",
      active: true,
      description:
        "NoSQL practice using MongoDB and the sample_airbnb dataset. Covers CRUD operations, aggregation pipelines, $group, $unwind, $bucket, regex filters, and array operations.",
      technologies: ["MongoDB", "MQL", "NoSQL", "Compass"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/JustinNarvaez/DataBase2/tree/main/MongoDB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Oracle HR Schema Diagram",
      href: "https://github.com/JustinNarvaez/DataBase2/blob/main/Schema.jpeg",
      dates: "February 2026",
      active: true,
      description:
        "Entity-relationship diagram of Oracle's HR schema showing the relationships between EMPLOYEES, DEPARTMENTS, JOBS, JOB_HISTORY, LOCATIONS, COUNTRIES, and REGIONS tables.",
      technologies: ["Oracle", "ERD", "Relational Model"],
      links: [
        {
          type: "View Diagram",
          href: "https://github.com/JustinNarvaez/DataBase2/blob/main/Schema.jpeg",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/JustinNarvaez/DataBase2/main/Schema.jpeg",
      video: "",
    },
  ],

  hackathons: [],
} as const;