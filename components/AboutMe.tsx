import { Box, Grid, GridItem, Heading, Text, Image, Center } from "@chakra-ui/react";

export default function AboutMe() {
    return (
        <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={1}
            >
                <GridItem colSpan={2}>
                    <Box>
                        <Heading variant='title3' marginBottom='42'>
                        Hello ✋, I'm Isaac Allef && I'm a Software Developer
                        </Heading>
                        <Text variant='small' marginBottom='28'>
                        My learning is based on creating projects to solve little problems and then join my knowledges to solve biggest problems. 
                        </Text>
                        <Text variant='small'>
                        I strive to improve the readability and quality of my codes every day because I know that it will make me a coder better. But I also strive to improve my soft skills because it will make me a solver problems better.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Center>
                        <Image
                            borderRadius="full"
                            boxSize="210px"
                            src="https://bit.ly/sage-adebayo"
                            alt="Segun Adebayo"
                            fallbackSrc="https://via.placeholder.com/150"
                        />
                    </Center>
                </GridItem>
        </Grid>
    )
}