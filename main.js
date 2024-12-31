require('./tracing');

const fastify = require('fastify');
const { fastifyRequestContext } = require('@fastify/request-context');

const app = fastify();
app.register(fastifyRequestContext);

app.addHook('onRequest', (_req, _res, done) => {
  new Promise((r) => setTimeout(r, 100)).then(done);
});

app.route({
  method: 'GET',
  url: '/example',
  handler: async () => {
    await new Promise((r) => setTimeout(r, 100));
    return { hi: 'there' };
  },
});

app.listen({ host: '127.0.0.1', port: '8888' });
