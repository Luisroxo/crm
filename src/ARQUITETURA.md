# Organização de Pastas do Frontend

- `src/components`: Componentes reutilizáveis (UI, layout, widgets, etc)
- `src/hooks`: Hooks customizados para lógica compartilhada
- `src/services`: Serviços de API, integração e utilitários
- `src/app`: Estrutura principal de rotas e páginas (Next.js App Router)

Sugestão de padrão:

- Componentes em PascalCase, arquivos de hook em camelCase.
- Serviços organizados por domínio (ex: `services/clientes.ts`).
- Cada componente com seu próprio diretório se possuir estilos/testes.

> Para detalhes, consulte o roadmap e mantenha a estrutura alinhada ao crescimento do projeto.
