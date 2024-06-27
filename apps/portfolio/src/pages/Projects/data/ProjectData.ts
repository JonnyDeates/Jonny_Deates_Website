import applianceremedy from '../assets/applianceremedy.png'
import galacticthreads from '../assets/galacticthreads.png'
import koitimer from '../assets/koitimer.png'
import koicoin from '../assets/koicoin.png'

export type ProjectType = {
    image: string,
    title: string,
    description: string,
}

const ProjectsData: ProjectType[] = [{
    image: applianceremedy,
    title: "Appliance Remedy",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
}, {
    image: galacticthreads,
    title: "Galactic Threads",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
}, {
    image: koitimer,
    title: "Koi Timer",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
},
    {
        image: koicoin,
        title: "Koi Coin",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim."
    }
    , {
        image:"",
        title: "",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim."
    }, {
        image: "",
        title: "",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim."
    },
];
export default ProjectsData;