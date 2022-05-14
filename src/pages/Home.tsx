import WithSubnavigation from '../components/Navbar';
import Footer from '../components/Footer';
import { Text } from '@chakra-ui/react';

const Home = (): JSX.Element => {
    return (
        <>
            <WithSubnavigation />
            <Footer />
        </>
    );
}

export default Home;