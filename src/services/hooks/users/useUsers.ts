import { useQuery } from 'react-query';
import { getUsers } from '../../queries/get-users';

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // mantém a requisição em cache por 5 segundos
  });
}
