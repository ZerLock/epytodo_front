import {
    Button,
    Center,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import NewtodoModal from '../Modals/NewtodoModal';

type TodoButtonProps = {
    user_id: number;
}

const NewtodoButton = ({ user_id }: TodoButtonProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Button
                border="2px"
                borderColor="gray.500"
                _hover={{bg: "transparent"}}
                variant="outline"
                w="300px"
                h="200px"
                rounded="2xl"
                onClick={() => onOpen()}
            >
                <Center>
                    <Stack direction='column' spacing="3">
                        <Text fontSize="6xl">+</Text>
                        <Text fontSize="1xl">Add new todo</Text>
                    </Stack>
                </Center>
            </Button>

            <NewtodoModal isOpen={isOpen} onClose={onClose} user_id={user_id} />
        </>
    );
}

export default NewtodoButton;