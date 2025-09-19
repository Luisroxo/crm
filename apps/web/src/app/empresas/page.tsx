import React from 'react';

export default function EmpresasPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Empresas</h1>
      {/* Busca e filtros mockados */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por nome, CNPJ ou e-mail..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
            <option value="">Todos os status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
            <option value="">Todos os segmentos</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="serviços">Serviços</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CNPJ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {/* Mock de dados para layout inicial */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Acme S.A.</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">12.345.678/0001-99</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">contato@acme.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800">Ativo</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-primary-600 hover:underline mr-2">Editar</button>
                <button className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Beta Ltda.</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">98.765.432/0001-11</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">beta@empresa.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-gray-200 text-gray-700">Inativo</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-primary-600 hover:underline mr-2">Editar</button>
                <button className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Paginação mockada */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t">
          <span className="text-sm text-gray-600">Exibindo 1-2 de 10 empresas</span>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-100" disabled>
              &lt;
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 font-semibold">1</button>
            <button className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-100">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}
