import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    ModalContent,
    Text,
    Input,
    Button,
    Stack,
    Toast,
    Select,
} from '@chakra-ui/react';
import { useState } from 'react';

type NewtodoModalType = {
    isOpen: boolean;
    onClose: () => void;
    user_id: number;
};

const NewtodoModal = ({ isOpen, onClose, user_id }: NewtodoModalType): JSX.Element => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [due_time, setDueTime] = useState('');
    const [status, setStatus] = useState('not started');

    const handleNewTodo = async () => {
        console.log(status);
        if (!title || !desc || !due_time || !status) {
            Toast({
                title: 'Error',
                description: 'Please fill all the fields',
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setTitle('');
            setDesc('');
            setDueTime('');
            setStatus('');
            return;
        }
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user_token')}`,
            },
            body: JSON.stringify({
                title: title,
                description: desc,
                due_time: due_time,
                user_id: user_id,
                status: status,
            }),
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => {
            Toast({
                title: 'Success',
                description: 'Todo added successfully',
                position: 'bottom',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            window.location.href = "/dashboard";
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize="2xl" fontWeight="bold">
                            Add new todo
                        </Text>
                    </ModalHeader>
                    <ModalBody>
                        <Stack direction='column' spacing="3">
                            <Input placeholder="title" value={title} onChange={(e: any) => setTitle(e.target.value)} />
                            <Input placeholder="description" value={desc} onChange={(e: any) => setDesc(e.target.value)} />
                            <Input placeholder="due time" value={due_time} onChange={(e: any) => setDueTime(e.target.value)} />
                            <Select value={status} onChange={(e: any) => setStatus(e.target.value)}>
                                <option value='not started'>not started</option>
                                <option value='todo'>todo</option>
                                <option value='in progress'>in progress</option>
                                <option value='done'>done</option>
                            </Select>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Stack direction="row" spacing="6">
                            <Button colorScheme="gray" onClick={() => onClose()}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" onClick={async () => await handleNewTodo()}>
                                Create
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NewtodoModal;