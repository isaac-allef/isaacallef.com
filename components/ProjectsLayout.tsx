import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem, Heading, Icon, Box, Image, Stack, HStack, VStack, SimpleGrid } from "@chakra-ui/react";

export default function ProjectsLayout() {
    return (
        <>
            <Heading variant='title2'>Projects.</Heading>
            <SimpleGrid columns={2} spacing={10}>
                <Center height='300px' border='1px solid'></Center>
                <Center height='300px' border='1px solid'></Center>
                <Center height='300px' border='1px solid'></Center>
                <Center height='300px' border='1px solid'></Center>
            </SimpleGrid>
            <Center>
                <Icon as={ChevronDownIcon} w={6} h={6} />
            </Center>
        </>
    )
}