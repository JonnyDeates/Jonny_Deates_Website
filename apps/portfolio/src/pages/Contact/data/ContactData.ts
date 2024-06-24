import githubLogo from "../../../assets/logos/github.svg";
import linkedInLogo from "../../../assets/logos/linkedin.svg";
import phoneLogo from "../../../assets/logos/phone.svg";
import gmailLogo from "../../../assets/logos/gmail.svg";
import locationLogo from "../../../assets/logos/location.svg";

const contactData=  {
    header: "Jon Deates",
    description: "Senior Software Developer",
    images: [
        {
            src: githubLogo,
            name: "Github",
            link: "https://github.com/JonnyDeates"
        },
        {
            src: linkedInLogo,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/jonnydeates/"
        },
        {
            src: phoneLogo,
            name: "720-410-4002",
            link: "tel:7204104002"
        },
        {
            src: gmailLogo,
            name: "JonnyDeates@gmail.com",
            link: "mailto:jonnydeates@gmail.com"
        },
        {
            src: locationLogo,
            name: "Georgetown (near Austin) Texas, USA",
            link: "https://www.google.com/maps/place/Austin,+TX/@30.3079541,-97.9205471,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu"
        }
    ]
}
export default contactData