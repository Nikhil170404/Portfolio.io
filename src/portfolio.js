const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prashant Singh',
  role: 'Front End Engineer',
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
    name: 'Recipe Shower',
    description:
      'Experience authentic Indian cuisine showcased beautifully: Prashant Singh recipe site features a rich collection of dishes, ingredients, and preparation times. Enhanced with Firebase authentication for seamless access.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT','FIREBASE'],
    sourceCode: 'https://github.com/Nikhil170404/RecipeShow',
    livePreview: 'https://65d990f6fd5529b3d3ec9912--jocular-alfajores-f0c0ab.netlify.app/',
  },
  {
    name: 'Game Center',
    description:
      'Dive into classic gaming fun on Prashant Singh site, featuring Tic-Tac-Toe, Blackjack, and Rock-Paper-Scissors. Seamlessly authenticated via Firebase, enjoy hours of entertainment with simple HTML, CSS, and JS.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT','FIREBASE'],
    sourceCode: 'https://github.com/Nikhil170404/Gamecenter',
    livePreview: 'https://phenomenal-taffy-fa37b0.netlify.app/',
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
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
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
