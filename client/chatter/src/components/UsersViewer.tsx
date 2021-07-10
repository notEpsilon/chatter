import React, { useState, useEffect } from 'react';
import {
    VStack,
    Heading,
    StackDivider,
    Text
} from '@chakra-ui/react';
import { socket } from './Chatter';

interface Props {
    name: string;
};

interface Person {
    name: string;
    socketID: string;
};

const UserViewer: React.FC<Props> = ({ name }) => {
    const [renderNames, setRenderNames] = useState<string[]>([]);

    useEffect(() => {
        socket.on('new-user-entered-2', (personArr: Person[]) => {
            setRenderNames(prev => personArr.map(person => person.name));
        });
        socket.on("user-disconnected-2", (personArr: Person[]) => {
            setRenderNames(prev => personArr.map(person => person.name));
        });
    }, []);

    useEffect(() => {
        socket.emit('new-user-entered-1', name);
    }, [name]);

    return (
        <VStack overflowY="auto" divider={<StackDivider borderColor="grey.200" />} borderRadius="8px" borderColor="grey.900" borderWidth="medium" h={["lg", "lg", "2xl"]} w="2xs" mr={2} px="5px" py="2px">
            <Heading textAlign="center" whiteSpace="nowrap" fontSize={["lg", "2xl", "3xl"]}>Online Users</Heading>
            {
                renderNames.map(nme => <Text>{nme}</Text>)
            }
        </VStack>
    );
};

export default UserViewer;
