import applianceremedy from '../assets/applianceremedy-4x3.webp'
import galacticthreads from '../assets/galacticthreads-4x3.webp'
import koigoalkeeper from '../assets/koitimer-4x3.webp'
import koitimer from '../assets/koitimer-4x3.webp'
import koicoin from '../assets/koicoin-4x3.webp'
import baldRidgeLodge from '../assets/baldridgelodge-4x3.webp'
import dearBeer from '../assets/dearbeer-4x3.webp'
import army from '../assets/army-4x3.webp'

export type ProjectType = {
  image: any,
  title: string,
  languages: string[],
  description: string,
  link: string,
  role: string
}

const ProjectsData: ProjectType[] = [{
  image: applianceremedy,
  title: "Appliance Remedy",
  role: 'Senior Software Dev.',
  languages: ["Expressjs", "Reactjs", "Typescript", "PostgreSQL", "Kubernetes", "Docker"],
  description: "I led a small team in developing a multi-page application (MPA) for an appliance repair business, " +
    "guiding the team through agile, lean, and XP practices with a strong focus on test-driven development. I managed " +
    "a delivery pipeline, designed a custom hosting solution, and optimized build process containers to streamline " +
    "deployment. Additionally, I led the team in adapting to evolving client requirements. Together, we implemented " +
    "an email service and developed user metrics, enabling the client to gain valuable insights into user behavior " +
    "for better, proactive decision-making.",
  link: 'https://applianceremedy.com'
}, {
  image: galacticthreads,
  title: "Galactic Threads",
  role: 'Senior Software Dev.',
  languages: ['Git', 'Kubernetes', 'Helm', 'Docker', 'React.js', 'Next.js'],
  description: "I led the development of an e-commerce application for a new clothing brand, guiding a team from project start " +
      "to final product. I implemented testing, facilitated team meetings, and developed a CI/CD pipeline. Additionally," +
      " I managed multiple developers, promoting best practices and introducing new technologies to optimize the workflow.",
  link: 'https://galacticthreads.com'
}, {
  image: army,
  title: "A.S.W.F.",
  role: 'Consultant / Software Dev.',
  languages: ['Reactjs', 'Kubernetes', 'Docker', 'Spring', 'Java', 'Helm', 'Cypress', 'K6', 'Grafana', 'Prometheus', 'AWS'],
  description: "I mentored Army personnel to build modern software skills, focusing on agile and lean methodologies, XP " +
      "principles, and essential design patterns. I led comprehensive workshops, facilitated stakeholder discussions to " +
      "align on project goals, and conducted team rituals to foster collaboration and continuous improvement. Through " +
      "in-depth presentations, I introduced new technologies and taught foundational software engineering principles, " +
      "including Test-Driven Development (TDD), SOLID design principles, the 12-Factor App methodology, and XP " +
      "practices. I provided hands-on training in technical stacks such as Spring, Java, React.js, Jest, and Cypress, " +
      "empowering the team with practical skills to handle real-world scenarios. Additionally, I designed and set up " +
      "robust CI/CD pipelines to streamline deployments, ensuring efficient and repeatable releases. Over the course " +
      "of this mentorship, I led the development of multiple applications tailored to Army needs, advancing their " +
      "technical capabilities to support the Army’s 2030 initiative. This experience not only accelerated the " +
      "team's ability to deliver quality software but also reinforced a culture of innovation and adaptability within " +
      "the organization.",
  link: 'https://soldiersolutions.swf.army.mil'
}, {
  image: baldRidgeLodge,
  title: "Bald Ridge Lodge",
  role: "Volunteer Dev.",
  languages: ['Wordpress', "Javascript", "CSS"],
  description: "I collaborated with a team to redesign the website for a non-profit boys' home, volunteering my time to " +
      "support the organization’s mission. We worked within the client’s specified tools and technologies, ensuring " +
      "compatibility while bringing the nonprofit's vision to life. This involved careful coordination to translate " +
      "their goals and requirements into an accessible, user-friendly design that effectively conveyed their mission. " +
      "Throughout the project, I engaged closely with stakeholders to gather feedback, iteratively refining the site " +
      "to meet the organization’s needs and values. This experience deepened my commitment to using technical skills " +
      "to support meaningful causes in the community.",
  link: 'https://baldridgelodge.org'
}, {
  image: koicoin,
  title: "Koi Coin",
  role: "Senior Developer",
  languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript',  'Docker', 'Kubernetes', 'Nodejs', 'PNPM', 'Turbo-repo', 'PostgreSQL'],
  description: "I developed a powerful budgeting application to help users easily manage and track various types of " +
    "income streams, making it simple to create and follow a budget. Designing this app required a strong focus on " +
    "modularity and maintainability, so I set up a monorepo structure using pnpm and Turborepo, which allowed me to" +
    " organize code cleanly and scale functionality with ease as new features were added. Security and ease of use were " +
    "essential to the application’s success. I designed a secure OAuth2 authentication flow, which provided users with" +
    " a seamless and protected login experience. Deploying on bare-metal infrastructure required careful configuration" +
    " for both scalability and reliability, which I achieved through Kubernetes and Helm. This setup gave the" +
    " application a solid foundation to handle high availability needs, ensuring users had a consistently reliable experience.",
  link: 'https://koicoin.app'

},
  {
    image: koigoalkeeper,
    title: "Koi Goal Keeper",
    role: "Senior Developer",
    languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript',  'Docker', 'Kubernetes', 'Nodejs', 'PNPM', 'Turbo-repo', 'PostgreSQL'],
    description: "I built a goal-tracking application designed to help users set, monitor, and achieve their objectives" +
      " with a clear focus on deadlines. The app simplifies the process of setting and adjusting due dates, giving users" +
      " a seamless way to stay on track and hit their targets. Using a pnpm and Turborepo monorepo structure, I organized" +
      " the project for maximum modularity, making it easy to maintain and extend as new features were needed. Security " +
      "and ease of use were essential, so I implemented an OAuth2 authentication flow for a secure and hassle-free login " +
      "experience. The application is deployed on bare-metal infrastructure, managed through Kubernetes and Helm, which " +
      "allows it to scale efficiently and reliably support a growing user base. This setup provided a solid foundation, " +
      "ensuring that users could confidently rely on the app to track their goals and stay on top of due dates.",
    link: 'https://koigoalkeeper.com'

  },
  {
    image: koitimer,
    title: "Koi Timer",
    role: 'Senior Developer',
    languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript',  'Docker', 'Kubernetes', 'Nodejs', 'PNPM', 'Turbo-repo', 'PostgreSQL'],
    description: "I developed a Pomodoro timer application focused on productivity and ease of use, helping users manage" +
      " their time effectively with minimal setup. This application supports customizable timer settings, allowing users" +
      " to adjust work and break intervals based on their preferences. To ensure efficient development and maintainability," +
      " I structured the project as a monorepo using pnpm and Turborepo, enabling clean modularity and streamlined " +
      "dependency management. Since user accounts weren’t necessary, the app is refreshingly simple, with no login or authentication " +
      "required—just open it and start your sessions. Deployed on bare-metal infrastructure with Kubernetes and Helm, " +
      "the application is both highly scalable and resilient, providing a reliable experience for users without " +
      "requiring account management. This setup allowed me to focus on delivering a smooth, distraction-free timer " +
      "tool that users can rely on to stay productive throughout the day.",
    link: 'https://koitimer.com'
  }, {
    image: dearBeer,
    title: "Dear Beer",
    role: 'Software Developer',
    languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript', "Heroku", "Vercel"],
    description: "I collaborated with a team to create an app that helps users discover bars and keep track of their " +
      "favorite drinks at each location. Designed to enhance the bar-hopping experience, the app integrates the Google" +
      " Maps API to provide an interactive map of bars users have visited, complete with options to explore new spots" +
      " and save tasting notes on different drinks. We hosted the frontend using Vercel for fast, optimized loading, " +
      "while the backend was deployed on Heroku to handle server-side logic and data storage. This setup allowed us to " +
      "manage the project’s frontend and backend effectively while ensuring quick load times and reliable performance." +
      " Working within a team, I led the implementation of the Google Maps API, which became a core feature of the app, " +
      "letting users track and visually map out their bar-hopping experiences effortlessly. This project combined" +
      " technical and collaborative skills to create a polished, engaging tool for exploring local nightlife.",
    link: 'https://dearbeer.vercel.app'
  },
  // {
  //   image: "",
  //   title: "LD Schott LLC",
  //   role: '',
  //   languages: [],
  //   description: "Lorem ipsum, dolor sit amet consectetur\n" +
  //     "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
  //     "praesentium nisi. Id laboriosam ipsam enim.",
  //   link: ''
  // },
];
export default ProjectsData;