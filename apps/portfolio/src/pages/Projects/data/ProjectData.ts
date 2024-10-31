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
  link: 'https://soldiersolutions.swf.army.mil/'
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
  link: 'https://baldridgelodge.org/'
}, {
  image: koicoin,
  title: "Koi Coin",
  role: "Senior Developer",
  languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript',  'Docker', 'Kubernetes', 'Nodejs', 'PNPM', 'Turbo-repo', 'PostgreSQL'],
  description: "",
  link: 'https://koicoin.app'

},
  {
    image: koigoalkeeper,
    title: "Koi Goal Keeper",
    role: "Senior Developer",
    languages: ['Reactjs', 'Javascript ES6', 'CSS', 'Typescript',  'Docker', 'Kubernetes', 'Nodejs', 'PNPM', 'Turbo-repo', 'PostgreSQL'],
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://koigoalkeeper.com'

  },
  {
    image: koitimer,
    title: "Koi Timer",
    role: 'Senior Developer',
    languages: [],
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://koitimer.com'
  }, {
    image: dearBeer,
    title: "Dear Beer",
    role: 'Software Developer',
    languages: [],
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://dearbeer.vercel.app/'
  }, {
    image: "",
    title: "LD Schott LLC",
    role: '',
    languages: [],
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: ''
  },
];
export default ProjectsData;