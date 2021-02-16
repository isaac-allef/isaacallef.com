import { Grid, GridItem } from "@chakra-ui/react";

export default function ProjectsLayout() {
    return (
        <Grid
            h="400px"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={1}
            >
                <GridItem colSpan={2} bg="red" />
                <GridItem colSpan={1} bg="red" />
                <GridItem colSpan={1} bg="red" />
                <GridItem colSpan={1} bg="red" />
                <GridItem colSpan={1} bg="red" />
                <GridItem colSpan={2} bg="red" />
        </Grid>
    )
}