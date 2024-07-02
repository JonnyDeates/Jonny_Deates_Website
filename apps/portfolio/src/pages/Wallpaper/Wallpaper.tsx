import TopNav from "../../components/TopNav/TopNav";
import React, {ReactNode} from "react";
import Footer from "../../components/Footer/Footer";
import './Wallpaper.css'
import { Outlet } from "react-router-dom";

type WallpaperProps = {children?: ReactNode}


const Wallpaper = ({children}: WallpaperProps)=> {

  const links =
    [{to: '/', name: 'About'}, {to: '/projects', name: 'Projects'}, {to: '/contact', name: 'Contact'}];

  return <div className='App'>
    <TopNav links={links}/>
    <Outlet />
    {children}
    {/*<Footer/>*/}
    </div>
};
export default Wallpaper;