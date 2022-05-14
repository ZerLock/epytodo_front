import WithSubnavigation from '../components/Navbar';
import Footer from '../components/Footer';
import { Text } from '@chakra-ui/react';

const Home = (): JSX.Element => {
    return (
        <>
            <WithSubnavigation />
            <Text>C'est une text <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>C'est un autre texte</Text>
            <Footer />
        </>
    );
}

export default Home;