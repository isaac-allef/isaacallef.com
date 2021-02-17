import { Grid, GridItem } from "@chakra-ui/react";
import AboutMeColumn from './AboutMeColumn';

export default function SkillsAndValues() {
    return (
        <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={1}
            marginBottom='44'
            >
                <GridItem colSpan={1}>
                <AboutMeColumn  
                        title='MAIN SKILLS.'
                        rows={[
                            {
                                subTitle: 'Back-end Development',
                                text: 'NodeJS, Javascript, Typescript, TypeoORM...',
                            },
                            {
                                subTitle: 'Front-end Development',
                                text: 'ReactJS, NextJS, Chakra-UI...',
                            },
                            {
                                subTitle: 'Computer Networks',
                                text: 'Protocols, servers, cloud...',
                            },
                        ]}
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <AboutMeColumn  
                        title='VALUES.'
                        rows={[
                            {
                                subTitle: 'Divide and conquer',
                                text: 'Solve two simple problem is easier than solve one big problem.',
                            },
                            {
                                subTitle: 'Never stop learning',
                                text: 'There’s always something new to learn and I love it.',
                            },
                            {
                                subTitle: 'Team work',
                                text: 'There is no one-man army. Except Rambo.',
                            },
                            {
                                subTitle: 'Determination',
                                text: 'Never give up. There are people who believes in you.',
                            },
                            {
                                subTitle: 'Keep it simple',
                                text: 'Why make it complicated?',
                            },
                        ]}
                    />
                </GridItem>
        </Grid>
    )
}