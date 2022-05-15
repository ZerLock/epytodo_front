import {
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import EditTodoModal from '../Modals/EditTodoModal';

type EditTodoButtonProps = {
    user_id: number;
    task_id: number;
}

const EditTodoButton = ({ user_id, task_id }: EditTodoButtonProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Button colorScheme="gray" onClick={() => onOpen()}>
                Edit
            </Button>

            <EditTodoModal isOpen={isOpen} onClose={onClose} user_id={user_id} task_id={task_id} />
        </>
    );
}

export default EditTodoButton;