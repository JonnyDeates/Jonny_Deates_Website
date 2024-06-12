import './Page404.css'
import React from "react";
import {Link} from "react-router-dom";


const Page404 = () => {
    return <main className={'Page404'}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Return to Home</Link>
    </main>
};
export default Page404;