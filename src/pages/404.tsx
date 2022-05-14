import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = (): JSX.Element => {
  return (
    <>
        <Navbar />
        <Box textAlign="center" py={10} px={6}>
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, cyan.500, cyan.700)"
            backgroundClip="text">
            404
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text color={'gray.500'} mb={6}>
            The page you're looking for does not seem to exist
          </Text>

          <Button onClick={() => window.location.href = '/'}
            colorScheme="blue"
            bgGradient="linear(to-r, cyan.500, cyan.700)"
            color="white"
            variant="solid">
            Go to Home
          </Button>
        </Box>
        <Footer/>
    </>
  );
}

export default NotFound;