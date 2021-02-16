import { Grid, GridItem } from "@chakra-ui/react";

export default function SkillsAndValues() {
    return (
        <Grid
            h="200px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={1}
            >
                <GridItem colSpan={1} bg="yellow" />
                <GridItem colSpan={1} bg="yellow" />
        </Grid>
    )
}