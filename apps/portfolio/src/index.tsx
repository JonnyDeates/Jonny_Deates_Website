import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ParallaxProvider} from "react-scroll-parallax";
import {RouterProvider} from "react-router-dom";
import router from "./Pages/router";


const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <ParallaxProvider>
    <RouterProvider router={router}/>
  </ParallaxProvider>
);
