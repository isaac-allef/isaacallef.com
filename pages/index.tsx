// import Head from 'next/head'

import { Grid, GridItem } from "@chakra-ui/react";
import Description from "../components/Description";
import Foot from "../components/Foot";
import Header from "../components/Header";
import ProjectsLayout from "../components/ProjectsLayout";
import SkillsAndValues from "../components/SkillsAndValues";

export default function Home() {
  return (
    <Grid
    h="1000px"
    templateRows="repeat(5, 1fr)"
    templateColumns="repeat(1, 1fr)"
    gap={0}
    >
        <GridItem colSpan={1}>
          <Header />
        </GridItem>
        
        <GridItem colSpan={1}>
          <Description />
        </GridItem>
        
        <GridItem colSpan={1}>
          <ProjectsLayout />
        </GridItem>
        
        <GridItem colSpan={1}>
          <SkillsAndValues />
        </GridItem>
        
        <GridItem colSpan={1}>
          <Foot />
        </GridItem>
    </Grid>
  )
}
