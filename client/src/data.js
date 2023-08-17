import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from "react-icons/fa";

import Work11 from "./assets/gallery3/1.png";
import Work12 from "./assets/gallery3/2.png";
import Work13 from "./assets/gallery3/3.png";
import Work14 from "./assets/gallery3/4.png";
import Work15 from "./assets/gallery3/5.png";
import Work16 from "./assets/gallery3/6.png";
import Work17 from "./assets/gallery3/7.png";
import Work18 from "./assets/gallery3/8.png";
import Work19 from "./assets/gallery3/9.png";

import Work21 from "./assets/gallery2/1.png";
import Work22 from "./assets/gallery2/2.png";
import Work23 from "./assets/gallery2/3.png";
import Work24 from "./assets/gallery2/4.png";
import Work25 from "./assets/gallery2/5.png";
import Work26 from "./assets/gallery2/6.png";

import Work31 from "./assets/gallery1/1.png";
import Work32 from "./assets/gallery1/2.png";
import Work33 from "./assets/gallery1/3.png";
import Work34 from "./assets/gallery1/4.png";

import Work41 from "./assets/gallery4/1.png";
import Work42 from "./assets/gallery4/2.png";
import Work43 from "./assets/gallery4/3.png";

import Work51 from "./assets/gallery5/1.png";
import Work52 from "./assets/gallery5/2.png";
import Work53 from "./assets/gallery5/3.png";

import Work61 from "./assets/gallery6/1.png";
import Work62 from "./assets/gallery6/2.png";
import Work63 from "./assets/gallery6/3.png";

import Theme1 from "./assets/themes/purple.png";
import Theme2 from "./assets/themes/red.png";
import Theme3 from "./assets/themes/blueviolet.png";
import Theme4 from "./assets/themes/blue.png";
import Theme5 from "./assets/themes/goldenrod.png";
import Theme6 from "./assets/themes/magenta.png";
import Theme7 from "./assets/themes/yellowgreen.png";
import Theme8 from "./assets/themes/orange.png";
import Theme9 from "./assets/themes/green.png";
import Theme10 from "./assets/themes/yellow.png";

export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome className="nav__icon" />,
        path: "/",
    },

    {
        id: 2,
        name: "About",
        icon: <FaUser className="nav__icon" />,
        path: "/about",
    },

    {
        id: 3,
        name: "Portfolio",
        icon: <FaFolderOpen className="nav__icon" />,
        path: "/portfolio",
    },

    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen className="nav__icon" />,
        path: "/contact",
    },
];

export const personalInfo = [
    {
        id: 1,
        title: "",
        description: "Ilona Skargovskaia",
    },

    {
        id: 6,
        title: "Address : ",
        description: "Haifa district, Krayot",
    },

    {
        id: 7,
        title: "Phone : ",
        description: "+972 534 762-486",
    },

    {
        id: 8,
        title: "Email : ",
        description: "ilona.skars@gmail.com",
    },

    {
        id: 9,
        title: "LinkedIn : ",
        description: "ilona-skargovskaya",
    },

    {
        id: 10,
        title: "Languages : ",
        description: "English, Hebrew, Russian",
    },
];

export const stats = [
    {
        id: 1,
        no: "5+",
        title: "Years of Experience",
    },

    {
        id: 2,
        no: "80+",
        title: "Completed Projects",
    },

    {
        id: 3,
        no: "100%",
        title: "User-friendly interfaces",
    },

    {
        id: 4,
        no: "98%",
        title: "Client Satisfaction Rate",
    },
];

export const resume = [
    {
        id: 1,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2018 - PRESENT",
        title: "Digital marketing specialist",
        desc: "Freelance",
    },

    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2018-2022",
        title: "Founder Kids.by",
        desc: "Full-cycle printing company",
    },

    {
        id: 3,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2014-2020",
        title: "WEB-developer Team Leader",
        desc: "Minsk state concert organization (Belarus)",
    },

    {
        id: 4,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2023",
        title: "Full Stack development",
        desc: "Developers Institute, TLV Coding Bootcamp (Israel)",
    },

    {
        id: 5,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2022",
        title: "Frontend development",
        desc: "The Rolling Scopes School (EPAM)",
    },

    {
        id: 6,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2012-2016",
        title: "Bachelor of software development",
        desc: "Belarussian State University of Informatics and Radioelectronics",
    },

    {
        id: 7,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2008-2012",
        title: "SOFTWARE TECHNICIAN",
        desc: "Minsk Radioengineering College",
    },

    {
        id: 8,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2014-2016",
        title: "Website developer",
        desc: "Webmedia.by",
    },

    {
        id: 9,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2011-2014",
        title: "Website layout designer",
        desc: "Webmir.by",
    },
];

export const skills = [
    {
        id: 1,
        title: "HTML5",
        percentage: "90",
    },

    {
        id: 2,
        title: "CSS3 / SASS",
        percentage: "95",
    },

    {
        id: 3,
        title: "Javascript",
        percentage: "80",
    },

    {
        id: 4,
        title: "OOP",
        percentage: "50",
    },

    {
        id: 5,
        title: "Python",
        percentage: "80",
    },

    {
        id: 6,
        title: "PostgreSQL",
        percentage: "60",
    },

    {
        id: 7,
        title: "Django",
        percentage: "65",
    },

    {
        id: 8,
        title: "React",
        percentage: "65",
    },
    {
        id: 9,
        title: "Node.js",
        percentage: "55",
    },
    {
        id: 10,
        title: "Wordpress",
        percentage: "75",
    },
    {
        id: 11,
        title: "Adobe Photoshop",
        percentage: "65",
    },
    {
        id: 12,
        title: "SEO & Influence marketing",
        percentage: "70",
    },
];

export const portfolio = [
    {
        id: 1,
        title: "TicketPRO (event system with QR codes)",
        description:
            "The user-friendly online event ticketing system, built on Node.js, React.js, and PostgreSQL that aims to simplify the process of event organization and ticket purchasing.Project provides users with a seamless and convenient way to discover, browse, and book tickets for various events such as concerts, sports events, conferences, and more. Additionally, the system includes QR codes on tickets for enhanced security and ease of entry to events.",
        gallery: [
            {
                original: Work11,
                thumbnail: Work11,
            },
            {
                original: Work12,
                thumbnail: Work12,
            },
            {
                original: Work13,
                thumbnail: Work13,
            },
            {
                original: Work14,
                thumbnail: Work14,
            },
            {
                original: Work15,
                thumbnail: Work15,
            },
            {
                original: Work16,
                thumbnail: Work16,
            },
            {
                original: Work17,
                thumbnail: Work17,
            },
            {
                original: Work18,
                thumbnail: Work18,
            },
            {
                original: Work19,
                thumbnail: Work19,
            },
        ],
        languages: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "JWT",
            "AWS",
            "HTML5",
            "CSS3"
        ],
        gh: "https://github.com/IlonaSkargovskaia/finalProject",
        link: "https://ticketpro-ih1o.onrender.com/",
    },
    {
        id: 2,
        title: "Recipebook",
        description:
            "Hackathon project in Developers Institute that enables users to browse recipes by category, search for specific recipes, and access step-by-step instructions. Users can enhance their cooking experience by watching detailed recipe videos from YouTube. Additionally, the website offers the ability to register an account, allowing users to save their favorite recipes. We can add new recipes to the database automatically from the free API with one line in the terminal, or using our own REST API on the site or from the Django admin panel. ",
        gallery: [
            {
                original: Work21,
                thumbnail: Work21,
            },
            {
                original: Work22,
                thumbnail: Work22,
            },
            {
                original: Work23,
                thumbnail: Work23,
            },
            {
                original: Work24,
                thumbnail: Work24,
            },
            {
                original: Work25,
                thumbnail: Work25,
            },
            {
                original: Work26,
                thumbnail: Work26,
            },
        ],
        languages: [
            "Django REST API",
            "API",
            "JavaScript",
            "SQLite",
            "HTML5",
            "CSS3",
        ],
        gh: "https://github.com/IlonaSkargovskaia/hackathonREST",
        link: "https://youtu.be/p3XCp3nwiTo",
    },
    {
        id: 3,
        title: "Plants",
        description:
            "Created a dynamic responsive landing page using HTML, SCSS (Sass), and pure JavaScript. The integration of Figma's design layout into the responsive landing page ensures a visually appealing and user-friendly experience across various devices and screen sizes ",
        gallery: [
            {
                original: Work31,
                thumbnail: Work31,
            },
            {
                original: Work32,
                thumbnail: Work32,
            },
            {
                original: Work33,
                thumbnail: Work33,
            },
            {
                original: Work34,
                thumbnail: Work34,
            },
        ],
        languages: ["JavaScript", "HTML", "SCSS"],
        gh: "https://github.com/IlonaSkargovskaia/plants",
        link: "https://ilonaskargovskaia.github.io/plants/",
    },
    {
        id: 4,
        title: "Memory game",
        description:
            "Mini-project built on React.js. Functionalities: Everytime the user clicks on a new card, he gets a point.If the user clicks twice on the same card, the score goes back to zero. The best score of the user displayed in section Top Score",
        gallery: [
            {
                original: Work41,
                thumbnail: Work41,
            },
            {
                original: Work42,
                thumbnail: Work42,
            },
            {
                original: Work43,
                thumbnail: Work43,
            },
        ],
        languages: ["React.js", "JSON", "HTML", "CSS"],
        gh: "https://github.com/IlonaSkargovskaia/memory",
        link: "https://memory-prm8.onrender.com/",
    },
    {
        id: 5,
        title: "Todo List",
        description:
            "Every self-respecting developer should have in his portfolio basic 'Todo List' ;) Mini-project at the Developers Institute after 5 days learning React.js",
        gallery: [
            {
                original: Work51,
                thumbnail: Work51,
            },
            {
                original: Work52,
                thumbnail: Work52,
            },
            {
                original: Work53,
                thumbnail: Work53,
            },
        ],
        languages: ["React.js", "HTML", "CSS"],
        gh: "https://github.com/IlonaSkargovskaia/todos",
        link: "https://todos-fdjo.onrender.com/",
    },
    {
        id: 6,
        title: "Quotes generator",
        description:
            "Mini-project based on React.js in Developers Institute with random quotes and random colors with nice animation after clicking on the generate button",
        gallery: [
            {
                original: Work61,
                thumbnail: Work61,
            },
            {
                original: Work62,
                thumbnail: Work62,
            },
            {
                original: Work63,
                thumbnail: Work63,
            },
        ],
        languages: ["React.js", "JSON", "HTML", "CSS"],
        gh: "https://github.com/IlonaSkargovskaia/quotes",
        link: "https://quotes-1ztt.onrender.com",
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: "hsl(252, 35%, 51%)",
    },

    {
        id: 2,
        img: Theme2,
        color: "hsl(4, 93%, 54%)",
    },

    {
        id: 3,
        img: Theme3,
        color: "hsl(271, 76%, 53%)",
    },

    {
        id: 4,
        img: Theme4,
        color: "hsl(225, 73%, 57%)",
    },

    {
        id: 5,
        img: Theme5,
        color: "hsl(43, 74%, 49%)",
    },

    {
        id: 6,
        img: Theme6,
        color: "hsl(339, 81%, 66%)",
    },

    {
        id: 7,
        img: Theme7,
        color: "hsl(80, 61%, 50%)",
    },

    {
        id: 8,
        img: Theme8,
        color: "hsl(19, 96%, 52%)",
    },

    {
        id: 9,
        img: Theme9,
        color: "hsl(88, 65%, 43%)",
    },

    {
        id: 10,
        img: Theme10,
        color: "hsl(42, 100%, 50%)",
    },
];

// OLD PORTFOLIO
// export const portfolio = [
//   {
//     id: 1,
//     img: Work1,
//     title: 'Project 1',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Photo',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'JavaScript, React',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },

//   {
//     id: 2,
//     img: Work2,
//     title: 'Project 2',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Website',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'React JS',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },

//   {
//     id: 3,
//     img: Work3,
//     title: 'Project 3',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Video',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'React JS, Node JS',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },

//   {
//     id: 4,
//     img: Work4,
//     title: 'Project 4',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Video',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'React JS, Node JS',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },

//   {
//     id: 5,
//     img: Work5,
//     title: 'Project 5',
//     details: [
//       {
//         title: 'Project : ',
//         desc: 'Website',
//       },
//       {
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         title: 'Language : ',
//         desc: 'React JS, Node JS',
//       },
//       {
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },

//   {
//     id: 6,
//     img: Work6,
//     title: 'Project 6',
//     details: [
//       {
//         icon: <FiFileText />,
//         title: 'Project : ',
//         desc: 'Photo',
//       },
//       {
//         icon: <FiUser />,
//         title: 'Client : ',
//         desc: 'Dribble',
//       },
//       {
//         icon: <FaCode />,
//         title: 'Language : ',
//         desc: 'React JS, Node JS',
//       },
//       {
//         icon: <FiExternalLink />,
//         title: ' ',
//         desc: 'http://google.com',
//       },
//     ],
//   },
// ];
