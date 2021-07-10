import React, { useState, useEffect } from 'react';
import {
    VStack,
    Input,
    HStack,
    Button
} from '@chakra-ui/react';
import CMessage from './CMessage';
import io from 'socket.io-client';

export const socket = io('https://chatter-light.herokuapp.com/');

interface Props {
    name: string;
};

interface Message {
    name: string;
    content: string;
}

const Chatter: React.FC<Props> = ({ name }) => {
    const [msg, setMsg] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        socket.on('message-recieved', data => {
            setMessages(old => [...old, { name: data.name, content: data.msg }]);
            setMsg(old => "");
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (msg.length) {
            socket.emit('message-sent', { msg, name });
        }
    };

    return (
        <VStack w={["lg", "lg", "2xl"]} h={["lg", "lg", "2xl"]} borderColor="grey.900" borderWidth="medium" borderRadius="8px">
            <VStack overflowY="auto" flex="8" w="100%">
                {
                    messages.map(message => <CMessage name={message.name} content={message.content} />)
                }
            </VStack>
            <HStack flex="1" w="100%" px={4}>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <HStack w="100%">
                        <Input type="text" variant="filled" value={msg} onChange={e => setMsg(old => e.target.value)} />
                        <Button colorScheme="twitter" type="submit">Send</Button>
                    </HStack>
                </form>
            </HStack>
        </VStack>
    );
};

export default Chatter;
