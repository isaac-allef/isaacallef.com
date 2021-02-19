import { Heading, Flex, HStack, Button } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
            as='header'
            top={0}
            position='sticky'
            justifyContent='space-between'
            py='1rem'
            bgColor='white'
            borderBottom='1px solid'
            borderColor='gray.100'
            marginBottom='3rem'
            marginTop='3rem'
        >
            <Heading variant='title1'>Isaac Allef</Heading>
            <HStack spacing='6'>
                <Button variant='link'>Home</Button>
                <Button variant='link'>About</Button>
                <Button variant='link'>Contact</Button>
            </HStack>
        </Flex>
    )
}