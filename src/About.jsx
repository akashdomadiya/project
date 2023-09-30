import React from "react";
import web from "../src/images/hero.jpg"

import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
    return (
        <>
           <Commom name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now"></Commom>
        </>
    );
};

export default About;