import { Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

declare interface InputMaskProps {
  card: string;
  setCard: (card: string) => void;
  type?: 'cep' | 'phone' | 'doc' | 'cpf' | 'cnpj';
}

const InputMask = ({ setCard, card, type, ...rest }: InputMaskProps) => {
  const inputCard = useRef(null);
  const [myPlaceHolder, setMyPlaceHolder] = useState('');

  const handleChange = useCallback(() => {
    let cardValue = inputCard.current.value;

    function formatCpf(value: string) {
      setMyPlaceHolder('999.999.999-99');
      cardValue = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

      return (inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}.${cardValue[2]}${`${
            cardValue[3] ? `.${cardValue[3]}` : ''
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`);
    }

    function formatCnpj(value: string) {
      setMyPlaceHolder('99.999.999/9999-99');
      cardValue = value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/);

      inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}.${cardValue[2]}${`${
            cardValue[3] ? `.${cardValue[3]}` : ''
          }`}${`${cardValue[4] ? `/${cardValue[4]}` : ''}`}${`${
            cardValue[5] ? `-${cardValue[5]}` : ''
          }`}`;
    }

    if (type === 'phone') {
      setMyPlaceHolder('(99) 9 99999-9999');
      cardValue = inputCard.current.value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);

      inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `(${cardValue[1]}) ${cardValue[2]}${`${
            cardValue[3] ? ` ${cardValue[3]}` : ''
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
    }
    // CEP
    if (type === 'cep') {
      setMyPlaceHolder('99999-999');
      cardValue = inputCard.current.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);

      inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}-${cardValue[2]}`;
    }

    // CPF
    if (type === 'cpf') {
      formatCpf(inputCard.current.value);
    }

    // CNPJ
    if (type === 'cnpj') {
      formatCnpj(inputCard.current.value);
    }

    if (type === 'doc') {
      // CPF
      if (inputCard.current.value.length <= 14) {
        formatCpf(inputCard.current.value);
      } else {
        // CNPJ
        formatCnpj(inputCard.current.value);
      }
    }

    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setCard(numbers);
  }, [card]);

  useEffect(() => {
    handleChange();
  }, [handleChange]);

  return (
    <>
      <Input
        type="text"
        ref={inputCard}
        onChange={handleChange}
        placeholder={myPlaceHolder}
        py="6"
        color="white"
        {...rest}
      />
    </>
  );
};

export default InputMask;
