import React, { useState } from 'react';

const conversasMock = [
  {
    id: 1,
    nome: 'Simone Cestaro',
    avatar: 'https://ui-avatars.com/api/?name=Simone+Cestaro',
    ultimoContato: 'Hoje, 09:12',
    status: 'Ativo',
    mensagens: [
      { id: 1, texto: 'Olá! Preciso de ajuda.', autor: 'Simone', data: '09:12' },
      { id: 2, texto: 'Claro, como posso ajudar?', autor: 'Você', data: '09:13' },
    ],
  },
  {
    id: 2,
    nome: 'Priscila Canosa',
    avatar: 'https://ui-avatars.com/api/?name=Priscila+Canosa',
    ultimoContato: 'Ontem, 17:40',
    status: 'Inativo',
    mensagens: [
      { id: 1, texto: 'Enviei os documentos.', autor: 'Priscila', data: '17:39' },
      { id: 2, texto: 'Recebido, obrigado!', autor: 'Você', data: '17:40' },
    ],
  },
];

export default function ComunicacaoPage() {
  const [conversaSelecionada, setConversaSelecionada] = useState(conversasMock[0]);

  return (
    <main className="p-6 flex gap-6 h-[80vh]">
      {/* Lista de conversas */}
      <aside className="w-80 bg-white rounded-lg shadow flex flex-col">
        <header className="p-4 border-b font-semibold text-gray-700">Conversas</header>
        <ul className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {conversasMock.map((c) => (
            <li
              key={c.id}
              className={`group flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 ${conversaSelecionada.id === c.id ? 'bg-primary-50' : ''}`}
              onClick={() => setConversaSelecionada(c)}
            >
              <img src={c.avatar} alt={c.nome} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{c.nome}</div>
                <div className="text-xs text-gray-500 truncate">Último contato: {c.ultimoContato}</div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded ${c.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{c.status}</span>
              <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-primary-600 hover:underline text-xs" onClick={e => e.stopPropagation()}>Responder</button>
                <button className="text-gray-500 hover:underline text-xs" onClick={e => e.stopPropagation()}>Arquivar</button>
                <button className="text-red-600 hover:underline text-xs" onClick={e => e.stopPropagation()}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      {/* Histórico de mensagens */}
      <section className="flex-1 bg-white rounded-lg shadow flex flex-col">
        <header className="p-4 border-b font-semibold text-gray-700 flex items-center gap-3">
          <img src={conversaSelecionada.avatar} alt={conversaSelecionada.nome} className="w-8 h-8 rounded-full object-cover" />
          <span>{conversaSelecionada.nome}</span>
        </header>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {conversaSelecionada.mensagens.map((m) => (
            <div key={m.id} className={`flex ${m.autor === 'Você' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-3 py-2 rounded-lg max-w-xs ${m.autor === 'Você' ? 'bg-primary-100 text-primary-900' : 'bg-gray-100 text-gray-800'}`}>
                <div className="text-sm">{m.texto}</div>
                <div className="text-xs text-gray-400 mt-1 text-right">{m.data}</div>
              </div>
            </div>
          ))}
        </div>
        <footer className="p-4 border-t flex gap-2">
          <input type="text" className="flex-1 px-3 py-2 border rounded focus:outline-none" placeholder="Digite uma mensagem..." disabled />
          <button className="bg-primary-600 text-white px-4 py-2 rounded disabled:opacity-50" disabled>Enviar</button>
        </footer>
      </section>
    </main>
  );
}
