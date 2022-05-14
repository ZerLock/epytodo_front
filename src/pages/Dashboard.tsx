import { Text, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import { FileWatcherEventKind } from 'typescript';

const Dashboard = (): JSX.Element => {
    const toast = useToast();

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem('user_token')) {
                window.location.href = '/';
                return;
            }
            toast({
                title: 'Success',
                description: 'You have been logged in',
                position: 'bottom',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            const res = await axios.request({
                method: 'get',
                url: 'http://localhost:3000/user',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                }
            });
            console.log("res", res);
        })();
    }, []);

    return (
        <>
            <Navbar />
            <Text>Dashboard</Text>
        </>
    );
}

export default Dashboard;