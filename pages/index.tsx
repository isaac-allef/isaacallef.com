// import Head from 'next/head'

import { Box, Grid, GridItem } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Foot from "../components/Foot";
import Header from "../components/Header";
import ProjectsLayout from "../components/ProjectsLayout";
import SkillsAndValues from "../components/SkillsAndValues";

export default function Home() {
    return (
        <Box
            as='main'
            marginLeft='10vw'
            marginRight='10vw'
        >
            <Header />
            <AboutMe />
            <ProjectsLayout />
            <SkillsAndValues />
            <Foot />
        </Box>
    )
}
