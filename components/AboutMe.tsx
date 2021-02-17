import { Box, Grid, GridItem, Heading, Text, Image, Center, Flex } from "@chakra-ui/react";

export default function AboutMe() {
    return (
        <Flex
        alignItems='center'
        justifyContent='space-between'
        // px='20'
        py='3'
        // border= '1px solid'
        marginBottom='44'
      >
                    <Box marginRight='120'>
                        <Heading variant='title3' marginBottom='42' maxWidth='600px'>
                        Hello ✋, I'm Isaac Allef && I'm a Software Developer
                        </Heading>
                        <Text variant='small' marginBottom='28'>
                        My learning is based on creating projects to solve little problems and then join my knowledges to solve biggest problems. 
                        </Text>
                        <Text variant='small'>
                        I strive to improve the readability and quality of my codes every day because I know that it will make me a coder better. But I also strive to improve my soft skills because it will make me a solver problems better.
                        </Text>
                    </Box>
                        <Image
                            borderRadius="full"
                            boxSize="270px"
                            src="https://bit.ly/sage-adebayo"
                            alt="Segun Adebayo"
                            fallbackSrc="https://via.placeholder.com/150"
                        />
        </Flex>
    )
}