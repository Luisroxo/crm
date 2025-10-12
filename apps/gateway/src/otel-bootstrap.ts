import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const sdk = new NodeSDK({
  metricReader: new PrometheusExporter({
    port: 9469, // Porta dedicada para gateway
    endpoint: '/metrics',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
