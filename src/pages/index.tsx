import { Button, Flex, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '../components/Form/Input';
import InputMask from '../components/InputMask';

export default function Home() {
  const [card, setCard] = useState('');
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" label="Email" />
          <Input name="password" label="Senha" type="password" />
          <InputMask setCard={setCard} card={card} type="doc" />
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Entrar
        </Button>
        <Button
          type="button"
          mt={6}
          colorScheme="blue"
          size="lg"
          onClick={() => alert(String(card))}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
}
