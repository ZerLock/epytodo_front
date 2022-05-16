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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

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