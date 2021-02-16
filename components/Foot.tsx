import { Text, Flex, HStack, Button, Divider } from "@chakra-ui/react";

export default function Foot() {
    return (
        <>
        <Divider />
        <Flex
        alignItems='center'
        justifyContent='space-between'
        py='3'
        // border= '1px solid'
      >
        <Text variant='small'>© Copyright 2021 | Isaac Allef Santos Cruz</Text>
        <HStack spacing='6'>
          <Text variant='link'>Twiter</Text>
          <Text variant='link'>Linkdin</Text>
          <Text variant='link'>Github</Text>
        </HStack>
      </Flex>
      </>
    )
}