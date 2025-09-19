import React, { useState } from 'react';

const fluxosMock = [
  {
    id: 1,
    nome: 'Robô de NPS',
    status: 'Ativo',
    descricao: 'Fluxo de pesquisa de satisfação automática',
  },
  {
    id: 2,
    nome: 'Boas-vindas WhatsApp',
    status: 'Inativo',
    descricao: 'Mensagem automática para novos leads do WhatsApp',
  },
];

export default function AutomacaoPage() {
  const [fluxos, setFluxos] = useState(fluxosMock);
  const [fluxoSelecionado, setFluxoSelecionado] = useState<typeof fluxosMock[0] | null>(null);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Automação / Bots</h1>
      <div className="flex gap-6">
        {/* Lista de fluxos */}
        <aside className="w-80 bg-white rounded-lg shadow flex flex-col">
          <header className="p-4 border-b font-semibold text-gray-700 flex items-center justify-between">
            Fluxos
            <button className="text-primary-600 text-xs font-medium hover:underline">Novo fluxo</button>
          </header>
          <ul className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {fluxos.map((f) => (
              <li
                key={f.id}
                className={`group px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center gap-3 ${fluxoSelecionado?.id === f.id ? 'bg-primary-50' : ''}`}
                onClick={() => setFluxoSelecionado(f)}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">{f.nome}</div>
                  <div className="text-xs text-gray-500 truncate">{f.descricao}</div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded ${f.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{f.status}</span>
                <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-primary-600 hover:underline text-xs" onClick={e => e.stopPropagation()}>Editar</button>
                  <button className="text-gray-500 hover:underline text-xs" onClick={e => e.stopPropagation()}>Ativar/Desativar</button>
                  <button className="text-red-600 hover:underline text-xs" onClick={e => e.stopPropagation()}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        {/* Detalhe do fluxo */}
        <section className="flex-1 bg-white rounded-lg shadow flex flex-col min-h-[300px]">
          {fluxoSelecionado ? (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{fluxoSelecionado.nome}</h2>
              <div className="text-gray-600 mb-4">{fluxoSelecionado.descricao}</div>
              <div className="text-xs text-gray-400 mb-2">Status: <span className={fluxoSelecionado.status === 'Ativo' ? 'text-green-700' : 'text-gray-600'}>{fluxoSelecionado.status}</span></div>
              <div className="bg-gray-50 border rounded p-4 text-sm text-gray-700">(Mock) Visualização do fluxo: aqui pode ser exibido um diagrama ou cards de etapas, inspirado no Kommo.</div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">Selecione um fluxo para visualizar detalhes</div>
          )}
        </section>
      </div>
    </main>
  );
}
