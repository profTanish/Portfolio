export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Tanish was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Tanish expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  export const myProjects = [
    {
      title: 'Koursely - Course Selling Platform',
      desc: 'Koursely enables educators to create courses that students can purchase and learn from. It features a robust review system and allows both educators and students to edit their profiles.',
      subdesc: 'This platform is built with MongoDB, Express.js, and React, offering a user-friendly interface and seamless course management.',
      texture: '/textures/project/Koursely.mkv',
      logo: '/assets/Koursely.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      // spotlight: '/assets/koursely-spotlight.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        { id: 3, name: 'MongoDB', path: 'mongodb.svg' },
      ],
    },
    {
      title: 'Chat - Real-Time Chat Application',
      desc: 'Chat allows users to create public and private chat rooms, interact with members of the room, and manage their profiles.',
      subdesc: 'Built using Next.js, WebSocket, and Prisma ORM, Chat offers real-time messaging and efficient data management.',
      texture: '/textures/project/Ychat.mkv',
      logo: '/assets/Ychat.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      // spotlight: '/assets/ychat-spotlight.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'WebSocket', path: '/assets/download.jpeg' },
        { id: 3, name: 'Prisma', path: '/assets/download1.png' },
      ],
    },
  ];
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
        id: 1,
        name: 'Freelancer',
        pos: 'Web Developer',
        duration: 'August 2024 - Present',
        title: "Freelanced two major projects, showcasing my expertise in end-to-end development and delivering customized solutions tailored to client requirements.",
        icon: '/assets/Freelance.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'TechnoHacks EDUTECH',
        pos: 'Web Developer',
        duration: 'June 2024 - August 2024',
        title: "Completed three projects, enhancing my skills in interactive design and development while delivering functional prototypes and applications.",
        icon: '/assets/technohacks.jpeg',
        animation: 'victory',
    },
];
