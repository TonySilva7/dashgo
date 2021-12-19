import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="center">
        <Text>Tony Silva</Text>
        <Text fontSize="sm" color="gray.300">
          tony@mail.com
        </Text>
      </Box>

      <Avatar size="sm" name="Tony Silva" src="https://github.com/TonySilva7.png" />
    </Flex>
  );
}
