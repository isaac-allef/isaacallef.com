import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem, Heading, Icon, Box, Image, Stack, HStack, VStack, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./Card";

export default function ProjectsLayout() {
    return (
        <VStack
            spacing={'35'}
            align="stretch"
            marginBottom='44'
            >
            <Heading variant='title2'>Projects.</Heading>
            <Wrap spacing="5vh" justify="center">
                <WrapItem>
                    <Card />
                </WrapItem>
                <WrapItem>
                    <Card />
                </WrapItem>
                <WrapItem>
                    <Card />
                </WrapItem>
                <WrapItem>
                    <Card />
                </WrapItem>
            </Wrap>
            <Center>
                <Icon as={ChevronDownIcon} w={6} h={6} />
            </Center>
        </VStack>
    )
}