# Planejamento de Autenticação e Controle de Acesso

## Estratégia de Autenticação
- Autenticação via JWT (login/senha tradicional)
- Possibilidade de evoluir para OAuth2 no futuro
- Suporte a API Key para integrações server-to-server

## Perfis de Acesso
- `admin`: acesso total ao sistema
- `usuario`: acesso restrito às suas entidades e permissões
- `integracao`: acesso via API Key, escopos limitados

## Escopos de Permissão
- `read`: leitura de dados
- `write`: criação/atualização de dados
- `admin`: operações administrativas

## Fluxo de Autenticação
1. Usuário faz login com e-mail e senha
2. Backend valida credenciais e retorna JWT com claims de perfil e escopos
3. JWT é enviado no header Authorization para acessar endpoints protegidos

## Segurança
- Senhas armazenadas com hash seguro (bcrypt)
- Expiração de tokens e refresh token (futuro)
- Logs de autenticação e tentativas inválidas

---

Este planejamento serve de base para implementação dos endpoints de autenticação, controle de acesso e documentação de segurança.