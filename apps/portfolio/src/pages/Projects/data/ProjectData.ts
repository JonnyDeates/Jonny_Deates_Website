import applianceremedy from '../assets/applianceremedy-4x3.webp'
import galacticthreads from '../assets/galacticthreads-4x3.webp'
import koitimer from '../assets/koitimer-4x3.webp'
import koicoin from '../assets/koicoin-4x3.webp'
import baldRidgeLodge from '../assets/baldridgelodge-4x3.webp'
import army from '../assets/army-4x3.webp'

export type ProjectType = {
    image: string,
    title: string,
    description: string,
    link: string,
    role: string
}

const ProjectsData: ProjectType[] = [{
    image: applianceremedy,
    title: "Appliance Remedy",
    role: 'Staff Engineer',
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://applianceremedy.com'
}, {
    image: galacticthreads,
    title: "Galactic Threads",
    role: 'Staff Engineer',
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://galacticthreads.com'
} , {
    image: baldRidgeLodge,
    title: "Bald Ridge Lodge",
    role:"Volunteer Developer",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://baldridgelodge.org/'
}, {
    image: koitimer,
    title: "Koi Timer",
    role: 'Senior Developer',
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
        "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
        "praesentium nisi. Id laboriosam ipsam enim.",
    link: 'https://koitimer.com'
},
    {
        image: koicoin,
        title: "Koi Coin",
        role: "Senior Developer",
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: 'https://koicoin.com'

    }
   , {
        image: army,
        title: "A.S.W.F.",
        role: 'Consultant / Software Developer',
        description: "",
        link: 'https://soldiersolutions.swf.army.mil/'
    }   , {
        image: "",
        title: "",
        role: '',
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: ''
    }   , {
        image: "",
        title: "",
        role: '',
        description: "Lorem ipsum, dolor sit amet consectetur\n" +
            "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
            "praesentium nisi. Id laboriosam ipsam enim.",
        link: ''
    },
];
export default ProjectsData;