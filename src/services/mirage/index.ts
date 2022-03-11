import { createServer, Factory, Model, Response } from 'miragejs';
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
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api'; // namespace para todas as rotas
      this.timing = 750; // define o tempo de resposta

      // rotas
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          {
            users,
          },
        );
      });

      this.post('/users');

      this.namespace = ''; // reseta o namespace
      this.passthrough(); // passa todas as requisições para o servidor
    },
  });
  return server;
}
