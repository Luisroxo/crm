# Estrutura Inicial para Implantação em Kubernetes

## Objetivo
Garantir escalabilidade, resiliência e facilidade de gerenciamento dos microserviços do CRM.

## Componentes Principais
- **Namespaces**: Separar ambientes (ex: dev, prod) e domínios lógicos.
- **Deployments**: Um deployment para cada microserviço (clientes, vendas, comunicação, tarefas, automação, usuários, gateway).
- **Services**: Service do tipo ClusterIP para comunicação interna e LoadBalancer/Ingress para expor o gateway.
- **StatefulSets**: Para bancos de dados (PostgreSQL, MongoDB) e Kafka, garantindo persistência e identidade dos pods.
- **ConfigMaps & Secrets**: Gerenciar variáveis de ambiente e segredos (ex: senhas de banco, JWT).
- **Volumes Persistentes (PVCs)**: Para dados dos bancos e do Kafka.
- **Horizontal Pod Autoscaler (HPA)**: Escalabilidade automática dos pods conforme demanda.
- **Ingress Controller**: Para roteamento externo (ex: NGINX Ingress).
- **Monitoramento**: Prometheus, Grafana e logs centralizados (ex: Loki).

## Sugestão de Ferramentas
- Minikube ou Kind para ambiente local.
- Helm para gerenciamento de charts e deploys.
- Kustomize para customização de manifests.

## Exemplo de Estrutura de Pastas
```
infra/
  k8s/
    base/
      deployments/
      services/
      statefulsets/
      configmaps/
      secrets/
      ingress/
      hpa/
    overlays/
      dev/
      prod/
```

---

## Exemplo de Deployment Kubernetes para o serviço vendas

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vendas
spec:
  replicas: 2
  selector:
    matchLabels:
      app: vendas
  template:
    metadata:
      labels:
        app: vendas
    spec:
      containers:
        - name: vendas
          image: seu-registro/vendas:latest
          ports:
            - containerPort: 3002
          envFrom:
            - secretRef:
                name: vendas-env
          resources:
            limits:
              cpu: "500m"
              memory: "512Mi"
            requests:
              cpu: "200m"
              memory: "256Mi"
```

## Exemplo de Secret Kubernetes para variáveis sensíveis do serviço vendas

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: vendas-env
type: Opaque
stringData:
  JWT_SECRET: "um_segredo_forte"
  DATABASE_URL: "postgres://vendas_user:vendas_pass@postgres-vendas:5432/vendas_db"
  PORT: "3002"
```

> Adapte os valores conforme seu ambiente e replique para os demais serviços.

---

Esta estrutura facilita a evolução do ambiente e a adoção de práticas DevOps desde o início do projeto.
