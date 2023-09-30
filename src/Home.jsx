import React from "react";
import web from "../src/images/c1.webp"

import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
    return (
        <>
           <Commom name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"></Commom>

        </>
    );
};

export default Home;