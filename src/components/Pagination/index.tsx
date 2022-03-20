import { Box, Stack, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

// define quantos irmãos devem ser exibidos ao lado do botão da página atual
const SIBLINGS_COUNT = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...Array(to - from)].map((_, i) => from + i + 1).filter((page) => page > 0);
};

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {
  /**
   * A lógica abaixo faz um cálculo para mostrar a página corrente e os números de páginas irmãs, antes de depois.
   */
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : [];

  console.log('PreviousPage', previousPage);

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + SIBLINGS_COUNT, lastPage))
      : [];
  console.log('NextPage', nextPage);

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > SIBLINGS_COUNT + 1 && (
          <>
            <PaginationItem number={1} />
            {currentPage > SIBLINGS_COUNT + 2 && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => <PaginationItem key={page} number={page} />)}

        <PaginationItem isCurrent number={currentPage} />

        {nextPage.length > 0 &&
          nextPage.map((page) => <PaginationItem key={page} number={page} />)}

        {currentPage + SIBLINGS_COUNT < lastPage && (
          <>
            {currentPage + SIBLINGS_COUNT + 1 < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
