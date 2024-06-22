import tsLogo from "../assets/typescript.png";
import reactjsLogo from "../assets/reactjs.png";
import jsLogo from "../assets/javascript.png";
import nextjsLogo from "../assets/nextjs.jpg";
import mLogo from "../assets/minimalism.png";
import tLogo from "../assets/thinkful.jpg";
import logo from "../../../assets/logos/yinyangyexin.png";
import linkedInLogo from "../../../assets/logos/linkedin.svg";
import githubLogo from "../../../assets/logos/github.svg";
import gmailLogo from "../../../assets/logos/gmail.svg";
import locationLogo from "../../../assets/logos/location.svg";
import {CSSProperties} from "react";

export type Image = {
  link: string,
  src: string,
  name: string,
  style?: CSSProperties,
}
export type SectionType = {
  header: string,
  description: string,
  images: Image[]
  skills: string[],
  backgroundColor: string
}
export type HomeDataType = {
  introduction: Omit<SectionType, "skills" | "backgroundColor">,
  sectionList: SectionType[]
}

const HOME_DATA:HomeDataType = {
  introduction: {
    header: "Jon Deates",
    description: "Senior Software Developer",
    images: [
      {
        src: linkedInLogo,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jonnydeates/"
      },
      {
        src: githubLogo,
        name: "Github",
        link: "https://github.com/JonnyDeates"
      },
      {
        src: gmailLogo,
        name: "JonnyDeates@gmail.com",
        link: "mailto:jonnydeates@gmail.com"
      },
      {
        src: locationLogo,
        name: "Georgetown Texas, USA",
        link: "https://www.google.com/maps/place/Austin,+TX/@30.3079541,-97.9205471,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu"
      }
    ]
  },
  sectionList: [
    {
      images: [{
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
        }],
      header: "Proud Consultant",
      description: "With extensive experience and expertise in modern web development, I specialize in ReactJS, Spring, Java, TypeScript, ExpressJS, and NextJS. As a senior developer, I bring a wealth of knowledge and technical prowess to every project, ensuring robust, scalable, and efficient solutions.",
      skills: [
          "TS",
          "ReactJs",
          "NextJs",
          "CSS"
      ],
      backgroundColor: "white"
    },
    {
      images: [{
        link: '',
        src: mLogo,
        name: "Minimalism",
      }],
      header: "Passion For Teaching",
      description: "Thanks to my time teaching the Army, I have found that I have a deep rooted passion in teaching. Personally, I have found that the joy generated from teaching, doesn't match much else for me. With much excitement and enthusiasm. I attend work upskilling and empowering my piers, as much as they do to me.",
      skills: [ "Spring" , "Java", "ExpressJs" ],
      backgroundColor: "black" //"#87FF7B"
    }, {
    images: [{
      link: 'https://koifoundation.com',
      name: "The Koi Foundation",
      src: logo,
    }],
      header: "The Koi Foundation LLC",
      description: "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
  "to expand the world's access too needed informed, factual information. Currently with three webservices \n" +
  "available and more on the way, it will be the goto place for resources and self-improvement for all.",
skills: ["Docker", "K8s", "Helm"],
      backgroundColor: "#7BC9FF"
    },
{
      images: [{
        link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful",
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
      backgroundColor: "white"
  },
    {
      images: [{
        link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful",
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
      backgroundColor: "black"
    },
  ]
};
export default HOME_DATA