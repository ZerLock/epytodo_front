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
              <Text fontSize="2xl" fontWeight="bold">EpuyTodo</Text>

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
                        {isConnected() ?
                        <>
                            <Center>
                            <Avatar
                                size="2xl"
                                src="https://cdn-icons-png.flaticon.com/512/3940/3940403.png"
                            />
                            </Center>
                            <br />
                            <Center>
                                <Stack direction={['column']} spacing="3">
                                    <Center>
                                        <Text>Username</Text>
                                    </Center>
                                    <Center>
                                        <Text>Dubosclard</Text>
                                    </Center>
                                    <Center>
                                        <Text>leo.dubosclard@epitech.eu</Text>
                                    </Center>
                                    <Center>
                                        <Text>Member since : 2021-12-03</Text>
                                    </Center>
                                </Stack>
                            </Center>
                            <br />
                            <MenuDivider />
                            <MenuItem>
                                Update Settings
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>
                                Logout
                            </MenuItem>
                        </>
                        :
                            <>
                                <Center>
                                    <Text fontSize="2xl">Account</Text>
                                </Center>
                                <MenuDivider />
                                <MenuItem>
                                    Sign Up
                                </MenuItem>
                            </>
                        }
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