import { useMediaQuery, Skeleton } from "@chakra-ui/react";

export default function Card() {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    
    let width = '30.6rem';

    if (!isLargerThan1280) {
        width = '49rem'
    }

    if (!isLargerThan1000) {
        width = '30.6rem'
    }

    return (
        <Skeleton w={width} h='17rem' borderWidth="1px">
        </Skeleton>
    )
}