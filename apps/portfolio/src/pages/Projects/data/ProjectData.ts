import applianceremedy from '../assets/applianceremedy.webp'
import galacticthreads from '../assets/galacticthreads.png'
import koitimer from '../assets/koitimer.webp'
import koicoin from '../assets/koicoin.png'

export type ProjectType = {
    image: string,
    title: string,
    description: string,
    link: string,
}

const ProjectsData: ProjectType[] = [{
    image: applianceremedy,
    title: "Appliance Remedy",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://applianceremedy.com'
}, {
    image: galacticthreads,
    title: "Galactic Threads",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://galacticthreads.com'
}, {
    image: koitimer,
    title: "Koi Timer",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://koitimer.com'
},
    {
        image: koicoin,
        title: "Koi Coin",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: 'https://koicoin.com'

    }
    , {
        image:"",
        title: "",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: ''
    }, {
        image: "",
        title: "",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: ''
    },
];
export default ProjectsData;