import React from 'react';
import {
    Text, VStack
} from '@chakra-ui/react';

interface Props {
    name: string;
    content: string;
};

const CMessage: React.FC<Props> = ({ name, content }) => {
    return (
        <VStack h="auto" w="98%" mx="auto" my={1} bgColor="#edf2f9" borderRadius="8px" py={1.5} px={2}>
            <Text alignSelf="flex-start" bgColor="rgb(0, 132, 255)" color="white" borderRadius="9999px" display="flex" alignItems="center" justifyContent="center" textAlign="center" pb="3px" px={5}>{name}</Text>
            <Text pl="5px" alignSelf="flex-start" color="black">{content}</Text>
        </VStack>
    );
};

export default CMessage;
