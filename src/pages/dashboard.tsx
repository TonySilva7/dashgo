import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

// create dashboard page
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" max-width={1480} px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mg="4">
              Inscritos da Semana
            </Text>
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mg="4">
              Taxa de Abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
