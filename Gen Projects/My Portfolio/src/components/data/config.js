//Hero  Section
const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcons = [
  // {
  //   id: 1,
  //   path: "M10 9h2V6c0-1.1.9-2 2-2h2V0h-2C9.79 0 8 1.79 8 4v5H6v3h2v11h3V12h2l1-3h-3V9z",
  //   viewBox: "0 0 24 24",
  // },
  // {
  //   id: 2,
  //   path: `M8 0C3.578 0 0 3.578 0 8c0 3.536 2.292 6.537 5.468 7.589.4.074.547-.173.547-.384 0-.191-.007-.695-.01-1.365-2.226.484-2.698-1.073-2.698-1.073-.364-.923-.889-1.168-.889-1.168-.726-.496.055-.486.055-.486.803.056 1.225.826 1.225.826.712 1.218 1.868.866 2.32.662.072-.516.278-.866.506-1.065-1.776-.203-3.645-.888-3.645-3.943 0-.87.313-1.583.829-2.141-.083-.203-.36-1.024.078-2.134 0 0 .67-.215 2.2.82.637-.177 1.32-.265 2.004-.268.685.003 1.368.09 2.005.268 1.53-1.035 2.2-.82 2.2-.82.439 1.11.162 1.931.079 2.134.517.558.829 1.271.829 2.141 0 3.063-1.872 3.74-3.653 3.943.288.246.541.733.541 1.479 0 1.067-.01 1.932-.01 2.194 0 .211.144.462.552.384C13.708 14.537 16 11.536 16 8c0-4.422-3.578-8-8-8z`,

  //   viewBox: "0 0 17 17",
  // },
  // {
  //   id: 3,
  //   path: `M23.953 4.57c-.885.392-1.83.654-2.825.775 1.017-.609 1.794-1.576 2.165-2.724-.951.564-2.005.975-3.127 1.195-.896-.956-2.168-1.55-3.593-1.55-2.719 0-4.924 2.205-4.924 4.924 0 .386.043.761.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.731-.671 1.577-.671 2.475 0 1.706.87 3.206 2.189 4.086-.807-.026-1.566-.247-2.229-.616v.061c0 2.384 1.693 4.37 3.947 4.826-.414.112-.849.171-1.296.171-.316 0-.624-.031-.928-.087.629 1.963 2.448 3.396 4.607 3.434-1.684 1.32-3.809 2.11-6.102 2.11-.396 0-.787-.023-1.174-.069 2.188 1.4 4.786 2.215 7.577 2.215 9.057 0 14.005-7.497 14.005-13.978 0-.213-.004-.426-.014-.637.961-.695 1.795-1.562 2.457-2.549l-.047-.020z`,
  //   viewBox: "0 0 24 24",
  // },
  {
    id: 4,
    path: `M4.98 3.5C4.98 2.12 6.1 1 7.5 1s2.5 1.12 2.5 2.5S8.9 6 7.5 6 4.98 4.88 4.98 3.5zM2 9h5v12H2V9zm7.5 
        0H14v1.75h.06c.58-1.1 2-2.25 4.19-2.25C21.8 8.5 24 10.25 24 13.94V21H19V14.5c0-1.53-.3-2.72-1.85-2.72-1.82
         0-2.6 1.3-2.6 2.72V21h-4.1V9z`,
    viewBox: "0 0 24 24",
  },
];

//Numbers Section

export const Numbers =[
  {id:1,number:12,title:'Created projects'},
  {id:2,number:200,title:'Projects'},
  {id:3,number:120,title:'Happy Clients'},
  {id:4,number:5,title:'Years'}
]

//Services Section

export const services =[
  {
    id:1,
    title:'WEB DEVELOPMENT',
    description:'My diverse skill set empowers me to develop websites that are not only functional but also aesthetically pleasing and user-centric. By combining technical proficiency with creativity, I strive to create web experiences that stand out and meet the needs of users and clients alike.'
  },
  {
    id:2,
    title:'AI Chatbot DEVELOPMENT',
    description:'Developed a chatbot for a customer support platform, handling FAQs and complex queries with high accuracy and efficiency.'
  },
  {
    id:3,
    title:'WEB DESIGN',
    description:'Proficient in working with popular e-commerce platforms  to build and customize online stores using Git for version control, ensuring seamless collaboration and project tracking.'
  }
];

//Skills Section

export const skills =[
  {
    skill:"React",
    percentage:80,
    icon:'https://img.icons8.com/office/40/react.png'
  },
  {
    skill:"Node.js",
    percentage:75,
    icon:'https://img.icons8.com/fluency/40/node-js.png'
  },
  {
    skill:"Tailwindcss",
    percentage:90,
    icon:'https://img.icons8.com/color/40/tailwindcss.png'
  },
  {
    skill:"Html",
    percentage:95,
    icon:'https://img.icons8.com/color/48/html-5--v1.png'
  },
  {
    skill:"Vue.js",
    percentage:80,
    icon:'https://img.icons8.com/fluency/40/vuejs.png'
  }
]

//Experience And Education Section

export const experience =[
  {
    id:1,
    title:'Frontend Developer',
    company:"FBV Inc.",
    year:'2022-2024',
    description:'Developed and maintained user-facing websites using HTML, CSS, JavaScript, and ReactJS.',
    icon:'https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png'
  },
  {
    id:2,
    title:'AI Chatbot Developer',
    company:"Swiver",
    year:'2023-2024',
    description:'Developed responsive virtual chatbots for customer service inquiries, enhancing customer relations.',
    icon:'https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png'
  },
]


export const education =[
  {
    id:1,
    degree:'Computer Science',
    institution:"Higher National Diploma.",
    year:'2019',
    details:'',
    icon:'https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png'
  },
  {
    id:2,
    degree:'Computer Engineering',
    institution:"Undergrad",
    year:'2021-OH',
    details:'',
    icon:'https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png'
  },
]

export const projects =[
  {
    id:1,
    title:'SeamSushi Restaurant Project',
    description:'In this project, I utilized CSS variables to maintain consistent and easily adjustable styling, imported CSS files to promote modularity and organization, and applied flex and position properties to create responsive and well-structured layouts. I rendered HTML through JavaScript using reusable functions to enhance code efficiency and incorporated smooth and subtle animations to improve the overall user experience with fluid transitions. I followed the Block Element Modifier (BEM) methodology for clear and maintainable class naming, maintained an organized file and folder structure for easy navigation and management, and ensured the application was fully responsive across all devices using responsive design techniques like media queries and fluid layouts. The project featured a navigation bar, a creative hero section, an About Us section, popular food, trending sushi, and drinks sections, as well as a newsletter signup and footer.',
    imageUrl:'/project1.jpg'
  },
  {
    id:2,
    title:'Emotion-Detector ',
    description:'The Emotion Detector project leverages AI and machine learning to analyze and interpret human emotions based on input data. Using advanced algorithms and natural language processing techniques, the system can identify various emotional states such as happiness, sadness, anger, and surprise from text, voice, or facial expressions. The project, built with HTML, CSS, and JavaScript, aims to enhance human-computer interaction by providing more empathetic and responsive user experiences. It integrates seamlessly with chatbot applications, improving their ability to understand and respond to user emotions effectively. This ongoing project reflects your growing expertise in Python programming and your deep interest in the AI field.',
    imageUrl:'/project2.jpg'
  },
  {
    id:3,
    title:'Hotel Booking Platform',
    description:'I developed a dynamic and user-friendly platform using React and CSS, hosted seamlessly on a reliable service. Leveraging Reacts powerful component-based architecture I created an intuitive interface that allows users to effortlessly search for and book hotel rooms. The application utilizes advanced CSS techniques to ensure a visually appealing and responsive design, adapting smoothly across various devices. Key features include real-time room availability updates, secure booking processes, and integrated customer reviews. By hosting the project on a robust platform, I ensured optimal performance and accessibility, providing users with a smooth and efficient reservation experienceThis project showcases my ability to combine modern web technologies to deliver a high-quality functional application in the hospitality industry.',
    imageUrl:'/project3.jpg'
  }
];

//contact Section 
export const contactData =[
  {
    id:1,
    title:'Name',
    description:'John Doe',
    icon:'https://img.icons8.com/hatch/64/name.png'
  },
  {
    id:2,
    title:'Phone Number',
    description:'+1 234 567 890',
    icon:'https://img.icons8.com/ios-filled/50/ffffff/phone.png'
  },
  {
    id:3,
    title:'Email',
    description:'Example@email.com',
    icon:'https://img.icons8.com/pastel-glyph/50/ffffff/new-post--v1.png'
  }
];