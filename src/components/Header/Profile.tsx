import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Tony Silva</Text>
          <Text fontSize="sm" color="gray.300">
            tony@mail.com
          </Text>
        </Box>
      )}

      <Avatar size="sm" name="Tony Silva" src="https://github.com/TonySilva7.png" />
    </Flex>
  );
}
