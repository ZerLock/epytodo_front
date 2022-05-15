import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Text,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Toast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

type UpdateAccountProps = {
    isOpen: boolean;
    onClose: () => void;
    user_id: number;
}

const UpdateAccountModal = ({ isOpen, onClose, user_id }: UpdateAccountProps): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdateAccount = async () => {
        if (!firstname || !name || !email || !password) {
            Toast({
                title: 'Error',
                description: 'Please fill all the fields',
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setFirstname('');
            setName('');
            setEmail('');
            setPassword('');
            return;
        }
        fetch(`http://localhost:3000/users/${user_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user_token')}`,
            },
            body: JSON.stringify({
                firstname: firstname,
                name: name,
                email: email,
                password: password,
            }),
            mode: 'cors'
        })
        .then(res => window.location.href = "/dashboard")
        .catch(err => console.log(err));
    }

    const handleDeleteAccount = async () => {
        fetch(`http://localhost:3000/users/${user_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user_token')}`,
            },
            mode: 'cors',
        })
        .then(res => window.location.href = "/")
        .catch(err => console.log(err));
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text>Update Account</Text>
                    </ModalHeader>
                    <ModalBody>
                        <Stack direction='column' spacing="3">
                            <Input placeholder="name" value={firstname} onChange={(e: any) => setFirstname(e.target.value)} />
                            <Input placeholder="lastname" value={name} onChange={(e: any) => setName(e.target.value)} />
                            <Input placeholder="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
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
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack direction="row" spacing="3">
                            <Button colorScheme="gray" onClick={() => onClose()}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={async () => await handleDeleteAccount()}>
                                Delete
                            </Button>
                            <Button colorScheme="blue" onClick={async () => await handleUpdateAccount()}>
                                Save changes
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateAccountModal;