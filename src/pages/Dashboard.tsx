import { useToast, Grid, Center, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DashNavbar from '../components/Navbar/Dashnavbar';
import Navbar from '../components/Navbar/Navbar';
import Todo from '../components/Todo';
import NewtodoButton from '../components/Buttons/NewtodoButton';

const Dashboard = (): JSX.Element => {
    const [account, setAccount] = useState<any>(null);
    const [todos, setTodos] = useState<any[]>([]);
    const toast = useToast();

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem('user_token')) {
                window.location.href = '/';
                return;
            }
            fetch(`http://${process.env.REACT_APP_API}/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                },
                mode: "cors",
            })
            .then(res => res.json())
            .then(res => {
                console.log("id", res.id)
                setAccount(res);
                fetch(`http://${process.env.REACT_APP_API}/user/todos`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                    },
                    mode: "cors",
                })
                .then(res => res.json())
                .then(res => {
                    console.log("res", res);
                    setTodos(res);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })();
    }, [toast]);

    return (
        <>
            {account ?
                <DashNavbar id={account.id} name={account.firstname} lastname={account.name} email={account.email} created_at={account.created_at.slice(0, 10)} />
                :
                <Navbar />
            }
            <Center>
                <Grid templateColumns="repeat(4, 1fr)" gap="20" marginTop="2%">
                    {todos.map((todo: any) => (
                        <GridItem boxShadow="3xl">
                            <Todo key={todo.id} task_id={todo.id} title={todo.title} desc={todo.description} due_time={todo.due_time} user_id={todo.user_id} />
                        </GridItem>
                    ))}
                    {account && <NewtodoButton user_id={account.id} />}
                </Grid>
            </Center>
        </>
    );
}

export default Dashboard;