# LGPD Compliance Notes

## Lei Geral de Proteção de Dados (LGPD) - Conformidade

### Dados Pessoais Coletados
O sistema CRM coleta e processa os seguintes dados pessoais:
- **Dados de identificação**: Nome, e-mail
- **Dados de acesso**: Logs de autenticação e atividade
- **Dados de uso**: Interações com o sistema

### Base Legal
- **Execução de contrato**: Para prestação dos serviços de CRM
- **Consentimento**: Para funcionalidades opcionais e marketing
- **Interesse legítimo**: Para segurança e melhoria dos serviços

### Direitos dos Titulares
O sistema deve implementar funcionalidades para:
1. **Acesso**: Visualizar dados pessoais armazenados
2. **Correção**: Alterar dados incorretos ou incompletos
3. **Exclusão**: Apagar dados quando solicitado
4. **Portabilidade**: Exportar dados em formato estruturado
5. **Oposição**: Opor-se ao processamento
6. **Revogação**: Retirar consentimento

### Implementação Técnica
- **Criptografia**: Dados sensíveis criptografados em repouso
- **Anonimização**: Capacidade de anonimizar dados após exclusão
- **Auditoria**: Logs de todas as operações com dados pessoais
- **Retenção**: Políticas automáticas de exclusão de dados

### Responsabilidades
- **Controlador**: Empresa que utiliza o CRM
- **Operador**: Prestador de serviços de desenvolvimento
- **DPO**: Designação quando necessário

### Documentação Obrigatória
- Registro de atividades de tratamento
- Relatório de impacto à proteção de dados (quando aplicável)
- Políticas de privacidade e termos de uso
- Procedimentos para resposta a incidentes