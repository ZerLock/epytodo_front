import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Register = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleLogin = async () => {
        if (!name || !lastname || !email || !password) {
            toast({
                title: 'Error',
                description: 'Please fill all the fields',
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setName('');
            setEmail('');
            setLastname('');
            setPassword('');
            return;
        }
        try {
            const result = await axios({
                method: 'post',
                url: 'http://localhost:3000/register',
                data: {
                    name: lastname,
                    firstname: name,
                    email: email,
                    password: password
                }
            });
            if (result.status !== 201 || !result.data.token) {
                toast({
                    title: 'Error',
                    description: 'An error occured',
                    position: 'bottom',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }
            localStorage.setItem("user_token", result.data.token);
            window.location.href = "/dashboard";
        } catch(error: any) {
            if (error.code === "ERR_BAD_REQUEST") {
                toast({
                    title: 'Error',
                    description: 'Email already used',
                    position: 'bottom',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }
            toast({
                title: 'Error',
                description: 'An error occured',
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <>
            <Navbar />
            <Flex
                minH={'90vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" value={name} onChange={(e: any) => setName(e.target.value)} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                <Input type="text" value={lastname} onChange={(e: any) => setLastname(e.target.value)} />
                                </FormControl>
                            </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }
                                    >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                    bg: 'blue.500',
                                    }}
                                    onClick={async () => await handleLogin()}
                                >
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link as="a" href="/login" color={'blue.400'}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

export default Register;