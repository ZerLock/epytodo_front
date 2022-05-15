import {
    Text,
    Center,
    Stack,
} from '@chakra-ui/react';
import EditTodoButton from './Buttons/EditTodoButton';

type TodoProps = {
    task_id: number;
    title: string;
    desc: string;
    due_time: string;
    user_id: number;
};

const Todo = ({ task_id, title, desc, due_time, user_id }: TodoProps): JSX.Element => {

    return(
        <>
            <Center border="2px" borderColor="gray.500" w="300px" h="200px" rounded="2xl">
                <Stack direction='column'>
                    <Center>
                        <Text fontSize="2xl" fontWeight="bold">{title}</Text>
                    </Center>
                    <Center>
                        <Text fontSize="xl" fontStyle="italic">{desc}</Text>
                    </Center>
                    <Center>
                        <Text>Due time: {due_time}</Text>
                    </Center>
                    <EditTodoButton user_id={user_id} task_id={task_id} />
                </Stack>
            </Center>
        </>
    );
}

export default Todo;