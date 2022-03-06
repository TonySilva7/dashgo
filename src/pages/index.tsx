import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
// import InputMask from '../components/InputMask';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  // const [card, setCard] = useState('');
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
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
            {...register('email')}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
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
