const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prashant Singh',
  role: 'Full Stack Developer',
  description:
    ' Frontend Developer proficient in React.js, Node.js, and HTML/CSS/JavaScript. Crafting sleek, responsive websites and dynamic web apps. Lets collaborate to elevate your digital presence',
  resume: 'https://drive.google.com/file/d/1R2Xtg9DNbRFcc1etI356QTBEjCSPdrbw/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/prashant-d-singh',
    github: 'https://github.com/Nikhil170404',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'RiseUnderdog',
    description:
      'RiseUnderdog is an eSports tournament platform for competitive gamers. It lets players join paid entry matches in games like FreeFire, Call of Duty, and BGMI, either 1v1 or squad vs squad. Users can manage profiles, track match history, and earn rewards. Built with React, Node.js, and Firebase, RiseUnderdog offers a secure, scalable, and modern gaming experience.',
    stack: ['REACT','FIREBASE','REDUX','FIRESTORE','NODE.JS','MATERIAL UI'],
  
    livePreview: "https://nikhil170404.github.io/RiseUnderdog.io/",
  },
  {
    name: 'Recipe Shower',
    description:
      'Experience authentic Indian cuisine showcased beautifully: Prashant Singh recipe site features a rich collection of dishes, ingredients, and preparation times. Enhanced with Firebase authentication for seamless access.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT','FIREBASE'],
    sourceCode: 'https://github.com/Nikhil170404/RecipeShow',
    livePreview: 'https://recipeshow.netlify.app/',
  },
  {
    name: 'Game Center',
    description:
      'Dive into classic gaming fun on Prashant Singh site, featuring Tic-Tac-Toe, Blackjack, and Rock-Paper-Scissors. Seamlessly authenticated via Firebase, enjoy hours of entertainment with simple HTML, CSS, and JS.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT','FIREBASE'],
    sourceCode: 'https://github.com/Nikhil170404/Gamecenter',
    livePreview: 'https://gamecenter0.netlify.app/',
  },
  {
    name: 'MoneySprint',
    description:
      'A responsive web application built with React and Firebase, allowing users to track their expenses, visualize spending patterns with interactive charts, and add expenses via speech input.',
    stack: ['CHART.JS', 'FIREBASE', 'REACT','FONTAWESOME','SPEECHRECOGINITION API', 'CSS','MATERIAL UI'],
    sourceCode: 'https://github.com/Nikhil170404/Moneysprint.io',
    livePreview: 'https://nikhil170404.github.io/Moneysprint.io/',
  },

  {
    name: 'letterBox',
    description:
      'Developed using HTML, CSS, and JavaScript, this web application fetches CSV files of Indias budget data, providing insights into various budget categories. Converted into an APK using a web-to-app platform, it enables convenient access to budget information on mobile devices.',
    stack: ['HTML','CSS','JS','WEB TO APP CONVETER'],
    sourceCode: 'https://github.com/Nikhil170404/LetterBox.io',
    livePreview: "/LetterBox.apk",
  },

  {
    name: 'uifry',
    description:
      'The landing page for the accounting app is sleek and modern, featuring a clean layout with a professional white background. It includes a compelling hero section, responsive design, smooth navigation, and well-organized feature highlights with icons and imagery. The overall design is user-friendly, engaging, and perfectly suited for an accounting app.',
    stack: ['HTML','CSS','JS'],
    sourceCode: 'https://github.com/Nikhil170404/LandingPg.io',
    livePreview: "https://uifry-mocha.vercel.app/",
  },

  {
    name: 'Ads Banner',
    description:
      'The site, built with Next.js, offers users a dynamic experience with 10 customizable banners. Users can easily adjust each banners background, description, title, and text color, providing a personalized and engaging interface. This feature allows for seamless customization and a tailored visual experience.',
    stack: ['NEXT JS','TYPESCRIPT','CSS'],
    sourceCode: 'https://github.com/Nikhil170404/AdsBanner.io',
    livePreview: "https://ads-banner-io.vercel.app/",
  },

  {
    name: 'News.io',
    description:
      'The news site leverages Redux for state management and pagination, fetching articles from NewsAPI to display news content. It provides users with a streamlined experience by managing and presenting news articles across various sections and locations, ensuring a well-organized and efficient news browsing experience.',
    stack: ['REACT','REDUX','NODEJS','NEWSAPI'],
    sourceCode: 'https://github.com/Nikhil170404/NEWSS.IO',
    livePreview: "https://nikhil170404.github.io/NEWSS.IO/",
  },

  {
    name: 'ProShop',
    description:
      'ProShop combines a Node.js backend and MongoDB to manage product listings and secure user authentication, delivering a seamless shopping experience.With React for a dynamic frontend, ProShop offers an intuitive interface for browsing products and handling transactions efficiently.',
    stack: ['REACT','NODEJS','MONGODB'],
    sourceCode: 'https://github.com/Nikhil170404/EcommerceShop.io',
    livePreview: "https://frontend-or4y5rjna-nikhil170404s-projects.vercel.app/",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React js',
  'Redux',
  'SASS',
  'Material UI',
  'Next js',
  'Git',
  'Java',
  'Python',
  'Mysql',
  'MongoDB',
  'Firebase'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'prashants1704@gmail.com',
}

export { header, about, projects, skills, contact }
