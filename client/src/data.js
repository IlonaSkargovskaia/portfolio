import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpeg';

import Theme1 from './assets/themes/purple.png';
import Theme2 from './assets/themes/red.png';
import Theme3 from './assets/themes/blueviolet.png';
import Theme4 from './assets/themes/blue.png';
import Theme5 from './assets/themes/goldenrod.png';
import Theme6 from './assets/themes/magenta.png';
import Theme7 from './assets/themes/yellowgreen.png';
import Theme8 from './assets/themes/orange.png';
import Theme9 from './assets/themes/green.png';
import Theme10 from './assets/themes/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: '',
    description: 'Ilona Skargovskaia',
  },


  {
    id: 6,
    title: 'Address : ',
    description: 'Haifa district, Krayot',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+972 534 762-486',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ilona.skars@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'ilona-skargovskaya',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hebrew, Russian',
  },
];

export const stats = [
  {
    id: 1,
    no: '5+',
    title: 'Years of Experience',
  },

  {
    id: 2,
    no: '80+',
    title: 'Completed Projects',
  },

  {
    id: 3,
    no: '100%',
    title: 'User-friendly interfaces',
  },

  {
    id: 4,
    no: '98%',
    title: 'Client Satisfaction Rate',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Digital marketing specialist',
    desc: 'Freelance',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018-2022',
    title: 'Founder Kids.by',
    desc: 'Full-cycle printing company',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2014-2020',
    title: 'WEB-developer Team Leader',
    desc: 'Minsk state concert organization (Belarus)',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Full Stack development',
    desc: 'Developers Institute, TLV Coding Bootcamp (Israel)',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Frontend development',
    desc: 'The Rolling Scopes School (EPAM)',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012-2016',
    title: 'Bachelor of software development',
    desc: 'Belarussian State University of Informatics and Radioelectronics',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2008-2012',
    title: 'SOFTWARE TECHNICIAN',
    desc: 'Minsk Radioengineering College',
  },

  {
    id: 8,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2014-2016',
    title: 'Website developer',
    desc: 'Webmedia.by',
  },

  {
    id: 9,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2011-2014',
    title: 'Website layout designer',
    desc: 'Webmir.by',
  },

  
];

export const skills = [
  {
    id: 1,
    title: 'HTML5',
    percentage: '90',
  },

  {
    id: 2,
    title: 'CSS3 / SASS',
    percentage: '95',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 4,
    title: 'OOP',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '80',
  },

  {
    id: 6,
    title: 'PostgreSQL',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Django',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '65',
  },
  {
    id: 9,
    title: 'Node.js',
    percentage: '55',
  },
  {
    id: 10,
    title: 'Wordpress',
    percentage: '75',
  },
  {
    id: 11,
    title: 'Adobe Photoshop',
    percentage: '65',
  },
  {
    id: 12,
    title: 'SEO & Influence marketing',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Project 1',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, React',
      },
      {
        icon: <FiExternalLink />,
        title: ' ',
        desc: 'http://http://google.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Project 2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: ' ',
        desc: 'http://google.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Project 3',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: ' ',
        desc: 'http://google.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Project 4',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: ' ',
        desc: 'http://google.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Project 5',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: ' ',
        desc: 'http://google.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Project 6',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: ' ',
        desc: 'http://google.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
