import tsLogo from "../assets/typescript.png";
import reactjsLogo from "../assets/reactjs.png";
import jsLogo from "../assets/javascript.png";
import nextjsLogo from "../assets/nextjs.jpg";
import mLogo from "../assets/minimalism.png";
import tLogo from "../assets/thinkful.jpg";
import {CSSProperties} from "react";
import logo from "../../../assets/logos/yinyangyexin.png";

export type Image = {
  link: string,
  src: string,
  name: string,
  style: CSSProperties,
  hasAnimationPlayed: boolean,
  newAnimation: string
}
export type SectionType = {
  header: string,
  description: string,
  images: Image[]
  skills: string[],
  backgroundColor: string
}
export type HomeDataType = {
  introduction: Omit<SectionType, "images"| "skills" | "backgroundColor">,
  sectionList: SectionType[]
}

const HOME_DATA:HomeDataType = {
  introduction: {
    header: "Howdy Partner!",
    description: "I'm a Software Engineer located in Austin Texas, working at a major company called Broadcom. " +
      "I'm incredibly fortunate to be working on a contract with the US Army, tackling bleeding edge problems for the army, " +
      "while actively teaching and enabling soldiers. " +
      "I am also owner, designer, and sole contributor to The Koi Foundation LLC. " +
      "I have a strong passion for programming and seeing my projects come into fruition." +
      "I am happily on a path of growth and rapid change and know my future is boundless!"
  },
  sectionList: [
    {
      images: [{
        link: 'https://www.typescriptlang.org/',
        src: tsLogo,
        name: "Typescript",
        style: {display: 'block'},
        hasAnimationPlayed: false,
        newAnimation: ''
      },
        {
          link: 'https://reactjs.org/',
          src: reactjsLogo,
          name: "Reactjs",
          style: {display: 'block'},
          hasAnimationPlayed: false,
          newAnimation: ''
        },
        {
          link: 'https://www.javascript.com/',
          src: jsLogo,
          name: "Javascript",
          style: {display: 'block'},
          hasAnimationPlayed: false,
          newAnimation: ''
        },
        {
          link: 'https://nextjs.org/',
          src: nextjsLogo,
          name: "Nextjs",
          style: {display: 'block'},
          hasAnimationPlayed: false,
          newAnimation: ''
        }],
      header: "Proud Consultant",
      description: "With extensive experience and expertise in modern web development, I specialize in ReactJS, Spring, Java, TypeScript, ExpressJS, and NextJS. As a senior developer, I bring a wealth of knowledge and technical prowess to every project, ensuring robust, scalable, and efficient solutions.",
      skills: [
          "TS",
          "ReactJs",
          "NextJs",
          "CSS"
      ],
      backgroundColor: "#7BC9FF"
    },
    {
      images: [{
        link: '',
        src: mLogo,
        name: "Minimalism",
        style: {display: 'block'},
        hasAnimationPlayed: false,
        newAnimation: ''
      }],
      header: "Passion For Teaching",
      description: "Thanks to my time teaching the Army, I have found that I have a deep rooted passion in teaching. Personally, I have found that the joy generated from teaching, doesn't match much else for me. With much excitement and enthusiasm. I attend work upskilling and empowering my piers, as much as they do to me.",
      skills: [ "Spring" , "Java", "ExpressJs" ],
      backgroundColor:  "#87FF7B"
    }, {
    images: [{
      link: 'https://koifoundation.com',
      name: "The Koi Foundation",
      src: logo,
      style: {},
      hasAnimationPlayed: false,
      newAnimation: '2s 1s linear rotate infinite'
    }],
      header: "The Koi Foundation LLC",
      description: "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
  "to expand the world's access too needed informed, factual information. Currently with three webservices \n" +
  "available and more on the way, it will be the goto place for resources and self-improvement for all.",
skills: ["Docker", "K8s", "Helm"],
      backgroundColor: "#FFB17B"
    },
{
      images: [{
        link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful",
        style: {display: 'block'},
        hasAnimationPlayed: false,
        newAnimation: ''
      }],
      header: "Thinkful - Engineering Immersion",
      description: "I went through a fast-tracked, full time program of online classes, mentorship, \n" +
        "and career coaching. This Data Science Bootcamp I believe was my fast track to really understand \n" +
        "the intricacies of a work environment and the importance of team building. I am very glad that I had enrolled.",
  skills: [
    "Senior",
    "Teacher",
    "Coach"
  ],
      backgroundColor: "#7BC9FF"
  },
  ]
};
export default HOME_DATA