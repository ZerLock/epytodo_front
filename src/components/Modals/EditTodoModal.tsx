import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Text,
    Input,
    Button,
    Stack,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

type EditProps = {
    isOpen: boolean;
    onClose: () => void;
    user_id: number;
    task_id: number;
}

const EditTodoModal = ({ isOpen, onClose, user_id, task_id }: EditProps): JSX.Element => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [due_time, setDueTime] = useState('');
    const [status, setStatus] = useState('');
    const toast = useToast();

    const handleDeleteTodo = async () => {
        fetch(`http://localhost:3000/todos/${task_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user_token')}`,
            },
            mode: 'cors',
        })
        .then(res => window.location.href = "/dashboard")
        .catch(err => console.log(err));
    }

    const handleEditTodo = async () => {
        if (!title || !desc || !due_time || !status) {
            toast({
                title: 'Error',
                description: 'Please fill all the fields',
                position: 'bottom',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        fetch(`http://localhost:3000/todos/${task_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('user_token')}`,
            },
            body: JSON.stringify({
                title: title,
                description: desc,
                due_time: due_time,
                status: status,
                user_id: user_id,
            }),
            mode: "cors",
        })
        .then(res => res.json())
        .then(res => {
            toast({
                title: 'Success',
                description: 'Todo edited successfully',
                position: 'bottom',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            console.log(res);
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
                        <Text>Edit Todo</Text>
                    </ModalHeader>
                    <ModalBody>
                    <Stack direction='column' spacing="3">
                            <Input placeholder="title" value={title} onChange={(e: any) => setTitle(e.target.value)} />
                            <Input placeholder="description" value={desc} onChange={(e: any) => setDesc(e.target.value)} />
                            <Input placeholder="due time" value={due_time} onChange={(e: any) => setDueTime(e.target.value)} />
                            <Input placeholder="status" value={status} onChange={(e: any) => setStatus(e.target.value)} />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack direction="row" spacing="6">
                            <Button colorScheme="gray" onClick={() => onClose()}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={async () => await handleDeleteTodo()}>
                                Delete
                            </Button>
                            <Button colorScheme="blue" onClick={async () => await handleEditTodo()}>
                                Save changes
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditTodoModal;