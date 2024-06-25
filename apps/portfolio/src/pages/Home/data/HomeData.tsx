import tsLogo from "../assets/typescript.png";
import reactjsLogo from "../assets/reactjs.png";
import jsLogo from "../assets/javascript.png";
import nextjsLogo from "../assets/nextjs.jpg";
import ckadBadge from '../assets/ckad_badge.png';
import aswfLogo from '../assets/ASWF.svg';
import {CSSProperties, ReactNode} from "react";
import ImageList from "../components/ImageList/ImageList";
import BackendNodes from "../components/BackendNodes/BackendNodes";
import AgileLean from "../components/AgileLean/AgileLean";

export type Image = {
  link: string,
  src: string,
  name: string,
  style?: CSSProperties,
  hasOpenButton?: boolean
}
export type SectionType = {
  header: string,
  description: string,
  subcomponent: ReactNode
  skills: string[],
  backgroundColor: string
}
export type HomeDataType = {
  introduction: { header: string, subHeader: string },
  sectionList: SectionType[]
}

const HOME_DATA: HomeDataType = {
  introduction: {
    header: "Jon Deates",
    subHeader: "Senior Software Developer"
  },
  sectionList: [
    {
      backgroundColor: "white",
      skills: ["TS", "ReactJs", "NextJs", "CSS"],
      header: "Frontend Expert",
      description:
        "I am a seasoned developer with profound expertise in TypeScript, ReactJS, NextJS, and CSS. " +
        "My proficiency lies in architecting dynamic and responsive web applications, utilizing the full potential of " +
        "these technologies to craft intuitive and seamless user experiences. I am adept at writing clean, maintainable code, " +
        "with a fervent commitment to staying on top of the latest industry trends and best practices. My extensive " +
        "knowledge and experience empower me to deliver high-caliber solutions that effectively address user needs and " +
        "align with business objectives.",
      subcomponent: <ImageList imageList={[
        {
          link: 'https://www.typescriptlang.org/',
          src: tsLogo,
          name: "Typescript",
        },
        {
          link: 'https://reactjs.org/',
          src: reactjsLogo,
          name: "Reactjs",
        },
        {
          link: 'https://www.javascript.com/',
          src: jsLogo,
          name: "Javascript",
        },
        {
          link: 'https://nextjs.org/',
          src: nextjsLogo,
          name: "Nextjs",
        }]}/>
    },
    {
      backgroundColor: "black",
      skills: ["Spring", "Java", "ExpressJs"],
      header: "Backend Adept",
      description: "I have extensive expertise in Spring Java and ExpressJS. My focus is on designing scalable " +
        "and secure server-side applications, employing hexagonal architecture, gateways, monorepos, and APIs to" +
        " ensure optimal performance and reliability. I excel in leveraging these technologies to streamline " +
        "backend processes and enhance overall system efficiency. My deep understanding of backend development " +
        "enables me to craft advanced solutions tailored to complex technical requirements, driving successful " +
        "outcomes for business operations.",
      subcomponent: <BackendNodes/>
    }, {
      backgroundColor: "#7BC9FF",
      skills: ["Docker", "K8s", "Helm"],
      header: "DevOps Expertise",
      description: 'I have a robust background in DevOps, highlighted by my CKAD certification and extensive ' +
        'experience with Docker, Kubernetes, and Helm. I have created my own pipelines and infrastructure to host ' +
        'and deploy applications, ensuring seamless deployment, scalability, and orchestration. My proficiency in ' +
        'these tools allows me to efficiently manage containerized applications and optimize system performance ' +
        'and reliability. This comprehensive knowledge empowers me to implement advanced solutions that support ' +
        'continuous integration and continuous deployment (CI/CD) pipelines, driving successful outcomes for ' +
        'business operations.',
      subcomponent: <ImageList imageList={
        [{
          link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9ea045c5-6368-4e4e-83ae-6cf2af7e4ed2-jonathan-deates-19cc77ce-bec5-4d22-a622-9c9b761a96e5-certificate.pdf",
          src: ckadBadge,
          name: "CKAD",
          style: {width: '300px', height: '300px'},
          hasOpenButton: true
        }]
      }
      wrapperStyle={{width: "fit-content", animation: 'rotate 1s', display: 'block'}}
      />
    },
    {
      backgroundColor: "white",
      skills: [
        "TDD",
        "Agile",
        "Lean",
        "XP"
      ],
      header: "Agile & Lean Methodologies",
      description: "I am proficient in Agile and Lean methodologies, leveraging these approaches to enhance team " +
        "productivity and project efficiency. As a part of a balanced team working alongside designers and product " +
        "managers, I foster a collaborative environment that ensures comprehensive and well-rounded development. My " +
        "practice of Test-Driven Development (TDD) and Extreme Programming (XP) guarantees high code quality and rapid " +
        "adaptability. By promoting an iterative development process, I can swiftly respond to changing requirements " +
        "and continuously deliver value. This approach enables me to drive innovation and achieve successful outcomes " +
        "in dynamic, fast-paced settings.",
      subcomponent: <AgileLean/>
    },
    {
      backgroundColor: "black",
      skills: [
        "Senior",
        "Teacher",
        "Coach"
      ],
      header: "Teaching & Consulting",
      description: "As a consultant for the army, I have had the privilege of teaching and enabling soldiers in programming and software development. I am deeply grateful for the opportunity to work on a variety of products that are utilized by the greater army, imparting my knowledge and expertise to enhance their technical skills. By providing tailored instruction and hands-on guidance, I have helped soldiers develop robust applications that meet the unique needs of military operations. This role has been an honor and has allowed me to contribute to the advancement of technology within the army, ensuring that our military personnel are equipped with the tools and knowledge necessary to excel in their duties.",
      subcomponent: <ImageList imageList={
        [
          {
            link: 'https://soldiersolutions.swf.army.mil/',
            src: aswfLogo,
            name: 'ASWF Logo',
            hasOpenButton: true,
            style: {width: "250px", height: '250px'}
          }
      ]
      }/>
    },
  ]
};
export default HOME_DATA