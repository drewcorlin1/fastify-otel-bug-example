To run

1. `npm i`
2. `docker-compose up -d jaeger`
3. `npm start`
4. `curl localhost:8888/example`
5. Go to `http://localhost:16686`
6. Search for traces from `example-service`
7. Click into the trace produced from step 4

See `GET /example` from the fastify instrumentation is not marked as on the critical path.
If you download the trace as JSON you can see it's marked as a child of the @fastify/request-context middleware (the span named `request handler - fastify -> @fastify/request-context`)
