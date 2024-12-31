const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-proto');

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { AlwaysOnSampler } = require('@opentelemetry/sdk-trace-base');

const sdk = new NodeSDK({
  serviceName: 'example-service',
  sampler: new AlwaysOnSampler(),
  traceExporter: new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces',
  }),
  instrumentations: getNodeAutoInstrumentations(),
});

sdk.start();
