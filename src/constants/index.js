
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SSC GSEB",
      company_name: "Pramukh Vidhyalay",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2017 - April 2018",
      points: [
        "Percentage: 88 %",
      ],
    },
    {
      title: "HSC GSHSEB",
      company_name: "Sharda Vidhyamandir",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2018 - March 2020",
      points: [
        "Percentage: 77 %",
        "JEE Mains: 86 %tile"
      ],
    },
    {
      title: "Bachelor of Engineering in Information Technology",
      company_name: "SCET, surat",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2020 - August 2024",
      points: [
        "CGPA: 9.5"
      ],
    },
    {
      title: "Minor Specialization in Machine Learning",
      company_name: "SCET, Surat",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Decempber 2023",
      points: [
        "CGPA: 9.5"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rohit proved me wrong.",
      name: "Kritik Jiyaviya",
      designation: "CTO",
      company: "ServiceIn",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rohit does.",
      name: "Bhagya Patel",
      designation: "CEO",
      company: "GradeKit",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
    },
    {
      testimonial:
        "After Rohit optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Dev Sakarsawala",
      designation: "Founder",
      company: "CampusTalk",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rohitsonvane88/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rohitsonvane88/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Rohitsonvane88/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
