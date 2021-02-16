import { Heading, Flex, HStack, Button } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
        alignItems='center'
        justifyContent='space-between'
        px='20'
        py='3'
        // border= '1px solid'
        marginBottom='44'
      >
        <Heading variant='large'>Isaac Allef</Heading>
        <HStack spacing='6'>
          <Button variant='link'>Home</Button>
          <Button variant='link'>About</Button>
          <Button variant='link'>Contact</Button>
        </HStack>
      </Flex>
    )
}