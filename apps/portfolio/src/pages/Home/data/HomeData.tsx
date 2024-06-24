import tsLogo from "../assets/typescript.png";
import reactjsLogo from "../assets/reactjs.png";
import jsLogo from "../assets/javascript.png";
import nextjsLogo from "../assets/nextjs.jpg";
import mLogo from "../assets/minimalism.png";
import tLogo from "../assets/thinkful.jpg";
import logo from "../../../assets/logos/yinyangyexin.png";
import {CSSProperties, ReactNode} from "react";
import ImageList from "../components/ImageList/ImageList";
import BackendNodes from "../components/BackendNodes/BackendNodes";

export type Image = {
    link: string,
    src: string,
    name: string,
    style?: CSSProperties,
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
            backgroundColor: "black" ,
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
            header: "The Koi Foundation LLC",
            description: "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
                "to expand the world's access too needed informed, factual information. Currently with three webservices \n" +
                "available and more on the way, it will be the goto place for resources and self-improvement for all.",
            subcomponent: <></>
        },
        {
            backgroundColor: "white",
            skills: [
                "Senior",
                "Teacher",
                "Coach"
            ],
            header: "Thinkful - Engineering Immersion",
            description: "I went through a fast-tracked, full time program of online classes, mentorship, \n" +
                "and career coaching. This Data Science Bootcamp I believe was my fast track to really understand \n" +
                "the intricacies of a work environment and the importance of team building. I am very glad that I had enrolled.",
            subcomponent: <></>
        },
        {
            backgroundColor: "black",
            skills: [
                "Senior",
                "Teacher",
                "Coach"
            ],
            header: "Thinkful - Engineering Immersion",
            description: "I went through a fast-tracked, full time program of online classes, mentorship, \n" +
                "and career coaching. This Data Science Bootcamp I believe was my fast track to really understand \n" +
                "the intricacies of a work environment and the importance of team building. I am very glad that I had enrolled.",
            subcomponent: <></>
        },
    ]
};
export default HOME_DATA