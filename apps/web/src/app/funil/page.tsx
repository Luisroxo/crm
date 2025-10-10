"use client";
import React, { useState } from 'react';

const etapasMock = [
  { nome: 'Entrada', cor: 'bg-blue-50', leads: [
    { id: 1, titulo: 'Lead #1', contato: 'Simone Cestaro', empresa: 'Empresa X', valor: 0, status: 'Novo' },
    { id: 2, titulo: 'Lead #2', contato: 'Priscila Canosa', empresa: 'Empresa Y', valor: 0, status: 'Novo' },
  ]},
  { nome: 'Necessidades', cor: 'bg-yellow-50', leads: [] },
  { nome: 'Demonstração', cor: 'bg-green-50', leads: [] },
  { nome: 'Teste', cor: 'bg-gray-50', leads: [] },
  { nome: 'Proposta', cor: 'bg-purple-50', leads: [] },
];

export default function FunilPage() {
  const [etapas, setEtapas] = useState(etapasMock);
  const [dragged, setDragged] = useState<{leadId: number, from: number} | null>(null);

  function onDragStart(leadId: number, from: number) {
    setDragged({ leadId, from });
  }

  function onDrop(to: number) {
    if (!dragged) return;
    if (dragged.from === to) return;
    setEtapas((prev) => {
      const etapasCopy = prev.map(e => ({ ...e, leads: [...e.leads] }));
      const leadIdx = etapasCopy[dragged.from].leads.findIndex(l => l.id === dragged.leadId);
      if (leadIdx === -1) return prev;
      const [lead] = etapasCopy[dragged.from].leads.splice(leadIdx, 1);
      etapasCopy[to].leads.push(lead);
      return etapasCopy;
    });
    setDragged(null);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Funil de Vendas</h1>
      <div className="flex gap-4 overflow-x-auto">
        {etapas.map((etapa, etapaIdx) => (
          <section
            key={etapa.nome}
            className={`min-w-[280px] w-72 flex-shrink-0 rounded-lg shadow ${etapa.cor} p-2 flex flex-col`}
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop(etapaIdx)}
          >
            <header className="font-semibold text-gray-700 mb-2 flex items-center justify-between">
              <span>{etapa.nome}</span>
              <span className="text-xs text-gray-400">{etapa.leads.length} leads</span>
            </header>
            <div className="flex-1 flex flex-col gap-2 min-h-[60px]">
              {etapa.leads.length === 0 && (
                <div className="text-xs text-gray-400 text-center py-4">Sem leads</div>
              )}
              {etapa.leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white rounded shadow p-3 flex flex-col gap-1 border border-gray-200 hover:border-primary-400 cursor-pointer group"
                  draggable
                  onDragStart={() => onDragStart(lead.id, etapaIdx)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      {lead.contato[0]}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm leading-tight">{lead.titulo}</div>
                      <div className="text-xs text-gray-600">{lead.contato} <span className="text-gray-400">•</span> {lead.empresa}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">R$ {lead.valor}</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800">{lead.status}</span>
                  </div>
                  <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-primary-600 hover:underline text-xs">Abrir</button>
                    <button className="text-primary-600 hover:underline text-xs">Editar</button>
                    <button className="text-red-600 hover:underline text-xs">Excluir</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
