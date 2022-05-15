import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Navbar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

    const isConnected = (): boolean => {
        if (localStorage.getItem("user_token"))
            return true;
        return false;
    }

    return (
        <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px="4">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Link
              fontSize="2xl"
              fontWeight="bold"
              href='/' _hover={{textDecoration:'none'}}
              textDecoration={'none'}>
                EpuyTodo
              </Link>

              <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded='full'
                      variant='link'
                      cursor='pointer'
                      minW={0}>
                      <Avatar
                        size="sm"
                        src="https://cdn-icons-png.flaticon.com/512/3940/3940403.png"
                      />
                    </MenuButton>
                    <MenuList alignItems="center" px="5">
                        <br />
                          <Center>
                              <Text fontSize="2xl">Account</Text>
                          </Center>
                          <MenuDivider />
                          <MenuItem
                              onClick={() => window.location.href = "/register"}
                          >
                              Sign Up
                          </MenuItem>
                        </MenuList>
                  </Menu>
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </>
    );
}

export default Navbar;