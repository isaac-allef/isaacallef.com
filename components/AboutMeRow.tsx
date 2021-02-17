import { Text, Box } from "@chakra-ui/react";

interface Request {
  subTitle: string;
  text: string;
}

export default function AboutMeRow({ subTitle, text }: Request) {
    return (
      <Box>
        <Text variant='normal' fontWeight='bold'>{ subTitle }</Text>
        <Text>{ text }</Text>
      </Box>
    )
}