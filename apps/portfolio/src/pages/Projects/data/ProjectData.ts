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
  languages: [],
  description: "Lorem ipsum, dolor sit amet consectetur\n" +
    "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
    "praesentium nisi. Id laboriosam ipsam enim.",
  link: 'https://galacticthreads.com'
}, {
  image: army,
  title: "A.S.W.F.",
  role: 'Consultant / Software Dev.',
  languages: [],
  description: "",
  link: 'https://soldiersolutions.swf.army.mil/'
}, {
  image: baldRidgeLodge,
  title: "Bald Ridge Lodge",
  role: "Volunteer Dev.",
  languages: [],
  description: "Lorem ipsum, dolor sit amet consectetur\n" +
    "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
    "praesentium nisi. Id laboriosam ipsam enim.",
  link: 'https://baldridgelodge.org/'
}, {
  image: koicoin,
  title: "Koi Coin",
  role: "Senior Developer",
  languages: [],
  description: "Lorem ipsum, dolor sit amet consectetur\n" +
    "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
    "praesentium nisi. Id laboriosam ipsam enim.",
  link: 'https://koicoin.app'

},
  {
    image: koigoalkeeper,
    title: "Koi Goal Keeper",
    role: "Senior Developer",
    languages: [],
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
    title: "",
    role: '',
    languages: [],
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: ''
  },
];
export default ProjectsData;