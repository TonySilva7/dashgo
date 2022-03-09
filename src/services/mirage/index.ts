import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export type User = {
  id?: number;
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}), // define o modelo de dados
    },

    // todos os campos da tabela 'User' são passados como método para o factory
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api'; // namespace para todas as rotas
      this.timing = 750; // define o tempo de resposta

      // rotas
      this.get('/users');
      this.post('/users');

      this.namespace = ''; // reseta o namespace
      this.passthrough(); // passa todas as requisições para o servidor
    },
  });

  return server;
}
