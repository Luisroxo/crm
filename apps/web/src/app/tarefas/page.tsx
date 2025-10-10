"use client";
import React, { useState } from 'react';

const tarefasMock = [
  {
    id: 1,
    titulo: 'Ligar para cliente X',
    responsavel: 'Simone Cestaro',
    status: 'Pendente',
  },
  {
    id: 2,
    titulo: 'Enviar proposta para Y',
    responsavel: 'Priscila Canosa',
    status: 'Em andamento',
  },
];

const statusList = ['Pendente', 'Em andamento', 'Concluída'];

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState(tarefasMock);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ titulo: '', responsavel: '', status: 'Pendente' });
  const [editId, setEditId] = useState<number|null>(null);

  function handleAddTarefa(e: React.FormEvent) {
    e.preventDefault();
    if (editId) {
      setTarefas(prev => prev.map(t => t.id === editId ? { ...t, ...form } : t));
    } else {
      setTarefas(prev => [
        ...prev,
        { id: prev.length + 1, ...form },
      ]);
    }
    setShowModal(false);
    setForm({ titulo: '', responsavel: '', status: 'Pendente' });
    setEditId(null);
  }

  function handleEdit(tarefa: typeof tarefas[0]) {
    setForm({ titulo: tarefa.titulo, responsavel: tarefa.responsavel, status: tarefa.status });
    setEditId(tarefa.id);
    setShowModal(true);
  }

  function handleDelete(id: number) {
    setTarefas(prev => prev.filter(t => t.id !== id));
  }

  function handleStatusChange(id: number, status: string) {
    setTarefas(prev => prev.map(t => t.id === id ? { ...t, status } : t));
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center justify-between">
        Tarefas
        <button
          className="bg-primary-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-700"
          onClick={() => setShowModal(true)}
        >
          Nova tarefa
        </button>
      </h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {tarefas.map((t) => (
              <tr key={t.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{t.titulo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{t.responsavel}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${t.status === 'Concluída' ? 'bg-green-100 text-green-800' : t.status === 'Em andamento' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-700'}`}
                    value={t.status}
                    onChange={e => handleStatusChange(t.id, e.target.value)}
                  >
                    {statusList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button className="text-primary-600 hover:underline text-xs" onClick={() => handleEdit(t)}>
                    Editar
                  </button>
                  <button className="text-red-600 hover:underline text-xs" onClick={() => handleDelete(t.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de criação de tarefa */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Nova tarefa</h2>
            <form className="flex flex-col gap-4" onSubmit={handleAddTarefa}>
              <input
                className="border rounded px-3 py-2"
                placeholder="Título da tarefa"
                value={form.titulo}
                onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))}
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Responsável"
                value={form.responsavel}
                onChange={e => setForm(f => ({ ...f, responsavel: e.target.value }))}
                required
              />
              <select
                className="border rounded px-3 py-2"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                {statusList.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="flex justify-end gap-2 mt-2">
                <button type="button" className="px-4 py-2 rounded bg-gray-100" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
