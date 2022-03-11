import { api } from '../Api';
import { User } from '../mirage';

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');

  const users = data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return users;
}
