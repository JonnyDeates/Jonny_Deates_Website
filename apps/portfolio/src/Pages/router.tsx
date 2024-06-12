import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import ProjectList from "./ProjectList/ProjectList";
import Wallpaper from "./Wallpaper/Wallpaper";
import Page404 from "./Page404/Page404";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Wallpaper />}
           errorElement={<Wallpaper>
             <Page404/>
           </Wallpaper>
           }>
      <Route path='' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<ProjectList/>}/>
    </Route>
  )
)
export default router;