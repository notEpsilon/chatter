import React, { useState } from 'react';
import {
    VStack,
    Heading,
    Input,
    FormControl,
    FormHelperText,
    Box
} from '@chakra-ui/react';
import { IState } from '../App';

interface Props {
    userSetter: React.Dispatch<React.SetStateAction<IState>>
}

const HomeForm: React.FC<Props> = ({ userSetter }) => {
    const [name, setName] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userSetter(prevState => ({ name, state: true }));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(prevName => e.target.value);
    return (
        <VStack boxSize="sm" borderColor="grey.900" borderWidth="3.2px" borderRadius="8px" px={8} py={14}>
            <Box mb="50px">
                <Heading letterSpacing="1px" color="blackAlpha.800">Login</Heading>
            </Box>
            <Box width="80%">
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <Input placeholder="Name" variant="filled" value={name} onChange={handleChange} />
                        <FormHelperText>this will be your display name</FormHelperText>
                    </FormControl>
                </form>
            </Box>
        </VStack>
    );
};

export default HomeForm;
