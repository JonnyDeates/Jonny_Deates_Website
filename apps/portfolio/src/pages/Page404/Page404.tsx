import './Page404.css'
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import {Button} from "koi-pool";


const Page404 = () => {
    const navigate = useNavigate()

    return <Header isSplitBackground={false} height={'100vh'}>
        <div className={'Page404'}>

            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Button onClick={() => navigate('/')} className={'NavButton'}>Return To Home</Button>
        </div>
    </Header>
};
export default Page404;