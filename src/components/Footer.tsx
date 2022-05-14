import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Text fontSize="2xl" fontWeight="bold">EpuyTodo</Text>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 EpuyTodo. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Léo Dubosclard</ListHeader>
            <Link href={'https://github.com/ZerLock'}>GitHub</Link>
            <Link href={'https://www.linkedin.com/in/leo-dubosclard/'}>Linkedin</Link>
            <Link href={'mailto:leo.dubosclard@epitech.eu'}>Mail</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Baptiste Leroyer</ListHeader>
            <Link href={'https://github.com/ZiplEix'}>GitHub</Link>
            <Link href={'https://www.linkedin.com/in/baptiste-leroyer/'}>Linkedin</Link>
            <Link href={'mailto:baptiste.leroyer@epitech.eu'}>Mail</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Link href={'https://github.com/EpitechPromo2026/B-WEB-200-LYN-2-1-epytodo-baptiste.leroyer'}>The original project</Link>
            <Link href={'https://github.com/ZiplEix/epytodo_front'}>Front project</Link>
            <Link href={'https://github.com/ZiplEix/epytodo_front/blob/main/LICENSE'}>Legal</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer;