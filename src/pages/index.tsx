import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
// import InputMask from '../components/InputMask';
import { useForm, SubmitHandler } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  // const [card, setCard] = useState('');
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="Email"
            type="email"
            {...register('email', { required: 'Email é obrigatório' })}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register('password', { required: 'Senha é obrigatório' })}
            error={errors.password}
          />
          {/* <InputMask setCard={setCard} card={card} type="doc" /> */}
        </Stack>
        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          mt={6}
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
        {/* <Button
          type="button"
          mt={6}
          colorScheme="blue"
          size="lg"
          onClick={() => alert(String(card))}
        >
          Enviar
        </Button> */}
      </Flex>
    </Flex>
  );
}
