"use client";
import React, { useState, useMemo } from "react";
import LayoutBase from "@/components/LayoutBase";

const clientesMock = [
  { id: 1, nome: "Junior Adeslo", telefone: "+55 41 84391-655", email: "", status: "Ativo" },
  { id: 2, nome: "Pedro Ramos", telefone: "+55 92 94201-191", email: "", status: "Inativo" },
  { id: 3, nome: "Gustavo Souza", telefone: "+55 47 97109-498", email: "contato@g4educacao.com", status: "Ativo" },
  { id: 4, nome: "Leticia Ramos", telefone: "+55 19 99411-2623", email: "", status: "Ativo" },
  { id: 5, nome: "Matheus Zambinati | G4 Educação", telefone: "", email: "m.zambinati@g4educacao.com", status: "Inativo" },
];

export default function ClientesPage() {
  // Paginação mock
  const totalPaginas: number = 5;
  const paginaAtual: number = 1;
  const [busca, setBusca] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("todos");
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroTelefone, setFiltroTelefone] = useState("");
  const [filtroTag, setFiltroTag] = useState("");

  // Mock de tags
  const tagsMock = ["automação de vendas", "cadastro novo", "marketing e social media"];

  // Filtro de clientes
  const clientesFiltrados = useMemo(() => {
    return clientesMock.filter((cliente) => {
      const buscaLower = busca.toLowerCase();
      const nomeMatch = cliente.nome.toLowerCase().includes(buscaLower);
      const emailMatch = cliente.email?.toLowerCase().includes(buscaLower);
      let filtroOk = true;
      if (filtroEmail === "comEmail") filtroOk = !!cliente.email;
      if (filtroEmail === "semEmail") filtroOk = !cliente.email;
      // Filtros avançados
      const filtroNomeOk = filtroNome ? cliente.nome.toLowerCase().includes(filtroNome.toLowerCase()) : true;
      const filtroTelefoneOk = filtroTelefone ? cliente.telefone.toLowerCase().includes(filtroTelefone.toLowerCase()) : true;
      // Filtro de tags (mock: busca substring no nome)
      const filtroTagOk = filtroTag ? cliente.nome.toLowerCase().includes(filtroTag.toLowerCase()) : true;
      return (nomeMatch || emailMatch) && filtroOk && filtroNomeOk && filtroTelefoneOk && filtroTagOk;
    });
  }, [busca, filtroEmail, filtroNome, filtroTelefone, filtroTag]);

  return (
    <LayoutBase>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Clientes</h1>
        {/* Barra de busca e filtros avançados */}
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-2">
          <div className="flex flex-col gap-2 w-full md:w-auto md:flex-row">
            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="w-full md:w-60 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Filtrar por nome"
              value={filtroNome}
              onChange={e => setFiltroNome(e.target.value)}
              className="w-full md:w-44 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Filtrar por telefone"
              value={filtroTelefone}
              onChange={e => setFiltroTelefone(e.target.value)}
              className="w-full md:w-44 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filtroEmail}
              onChange={e => setFiltroEmail(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos</option>
              <option value="comEmail">Com e-mail</option>
              <option value="semEmail">Sem e-mail</option>
            </select>
          </div>
          {/* Filtro de tags (mock) */}
          <div className="flex flex-col gap-1 w-full md:w-56">
            <input
              type="text"
              placeholder="Localizar tags"
              value={filtroTag}
              onChange={e => setFiltroTag(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap gap-1 mt-1">
              {tagsMock.map(tag => (
                <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-xs cursor-pointer" onClick={() => setFiltroTag(tag)}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:bg-gray-900">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">{cliente.nome}</td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{cliente.telefone}</td>
                  <td className="px-4 py-2 text-blue-700 dark:text-blue-400 underline">{cliente.email}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold 
                      ${cliente.status === 'Ativo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}
                    >
                      {cliente.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button title="Editar" className="p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4 1a1 1 0 01-1.263-1.263l1-4a4 4 0 01.828-1.414z" /></svg>
                    </button>
                    <button title="Excluir" className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Paginação */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500">Mostrando {clientesFiltrados.length} de {clientesMock.length} clientes</div>
            <nav className="inline-flex -space-x-px" aria-label="Pagination">
              <button className="px-2 py-1 rounded-l border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800" disabled={paginaAtual === 1}>&lt;</button>
              {[...Array(totalPaginas)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${paginaAtual === i + 1 ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}
                  aria-current={paginaAtual === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
              <button className="px-2 py-1 rounded-r border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800" disabled={paginaAtual === totalPaginas}>&gt;</button>
            </nav>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
}
