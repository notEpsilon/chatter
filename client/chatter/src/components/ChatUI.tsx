import React from 'react';
import { Center } from '@chakra-ui/react'
import Chatter from './Chatter';
import UsersViewer from './UsersViewer';

interface Props {
    name: string;
};

const ChatUI: React.FC<Props> = ({ name }) => {
    return (
        <Center w="100vw" h="100vh" padding={4}>
            <UsersViewer name={name} />
            <Chatter name={name} />
        </Center>
    );
};

export default ChatUI;
