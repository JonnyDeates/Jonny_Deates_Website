import applianceremedy from '../assets/applianceremedy.png'
import galacticthreads from '../assets/galacticthreads.png'
import koitimer from '../assets/koitimer.png'

export type ProjectType = {
    image: string,
    title: string,
    description: string,
}

const ProjectsData: ProjectType[] = [{
    image: applianceremedy,
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
}, {
    image: galacticthreads,
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
}, {
    image: koitimer,
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim."
},
    {
        image:"",
        title: "",
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