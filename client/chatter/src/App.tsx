import { Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import HomeForm from './components/HomeForm';
import ChatUI from './components/ChatUI';

export interface IState {
    name: string;
    state: boolean;
};

const App: React.FC = () => {
    const [user, setUser] = useState<IState>({ name: "", state: false });
    return (
        <Center h="100vh" w="100vw">
            {
                user.state && user.name.length ? <ChatUI name={user.name} /> : <HomeForm userSetter={setUser} />
            }
        </Center>
    );
};

export default App;
