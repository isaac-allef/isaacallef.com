import React from 'react';
import { VStack, Heading } from "@chakra-ui/react";
import AboutMeRow from "./AboutMeRow";

interface Row {
    subTitle: string;
    text: string;
}

interface Request {
    title: string;
    rows: Row[];
}

export default function AboutMeColumn({ title, rows }: Request) {
    return (
        <VStack
            spacing={'20'}
            align="stretch"
            >
            <Heading variant='title2'>{ title }</Heading>
            {React.Children.toArray(
                rows.map(row => (
                    <AboutMeRow 
                        subTitle={ row.subTitle }
                        text={ row.text }
                    />)
            ))}
        </VStack>
    )
}