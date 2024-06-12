import helmet from "helmet";

const helmetConfig = () => {
    return helmet({
        contentSecurityPolicy: {
            directives: {
                manifestSrc: "'self'",
            }
        }
    })
};
export default helmetConfig;