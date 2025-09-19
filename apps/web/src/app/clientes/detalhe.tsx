import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LayoutBase from "@/components/LayoutBase";

// Mock de cliente para visualização de detalhes
const cliente = {
  nome: "Dra. Carla - Advogada",
  avatar: "https://ui-avatars.com/api/?name=Carla+Advogada",
  empresa: "WCF Sociedade de Advocacia",
  celular: "+55 19 99296-5084",
  email: "advcarla.freitas@gmail.com",
  posicao: "Advogada",
  telComercial: "",
  emailComercialEmpresa: "",
  site: "",
  endereco: "",
  status: "Ativo",
  historico: [
    { data: "19/09/2025", descricao: "Cliente cadastrado no sistema." },
    { data: "20/09/2025", descricao: "Contato realizado via WhatsApp." },
    { data: "21/09/2025", descricao: "E-mail enviado para proposta." },
  ],
};

export default function ClienteDetalhePage() {
  const [showModal, setShowModal] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const router = useRouter();

  function handleExcluir() {
    setShowModal(true);
  }
  async function confirmarExclusao() {
    setShowModal(false);
    try {
      // Mock de integração com API REST
      const resp = await fetch("/api/clientes/1", { method: "DELETE" });
      if (!resp.ok) throw new Error("Erro ao excluir cliente");
      setMensagem("Cliente excluído com sucesso!");
      setTimeout(() => {
        router.push("/clientes");
      }, 1200);
    } catch (err: any) {
      setMensagem(err.message || "Erro ao excluir cliente");
    }
  }
  function cancelarExclusao() {
    setShowModal(false);
  }

  return (
    <LayoutBase>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6 mt-4">
        {mensagem && (
          <div className="mb-4 text-green-600 font-medium">{mensagem}</div>
        )}
        <div className="flex items-center gap-4 mb-6">
          <img src={cliente.avatar} alt={cliente.nome} className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{cliente.nome}</h2>
            <div className="text-sm text-gray-500 dark:text-gray-300">{cliente.empresa}</div>
            <span className={`px-2 py-1 rounded text-xs font-semibold ml-1 
              ${cliente.status === 'Ativo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>{cliente.status}</span>
          </div>
          {/* Ações rápidas */}
          <div className="flex gap-2">
            <button title="Editar" className="p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4 1a1 1 0 01-1.263-1.263l1-4a4 4 0 01.828-1.414z" /></svg>
            </button>
            <button title="Excluir" className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-300 transition-colors" onClick={handleExcluir}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        {/* Modal de confirmação de exclusão */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-sm">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Confirmar exclusão</h4>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Tem certeza que deseja excluir este cliente?</p>
              <div className="flex justify-end gap-2">
                <button onClick={cancelarExclusao} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Cancelar</button>
                <button onClick={confirmarExclusao} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Excluir</button>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Celular</div>
            <div className="text-base text-gray-900 dark:text-white">{cliente.celular}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">E-mail</div>
            <div className="text-base text-gray-900 dark:text-white">{cliente.email}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Posição</div>
            <div className="text-base text-gray-900 dark:text-white">{cliente.posicao}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Empresa</div>
            <div className="text-base text-gray-900 dark:text-white">{cliente.empresa}</div>
          </div>
        </div>
        {/* Histórico de interações */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Histórico de Interações</h3>
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {cliente.historico.map((item, idx) => (
              <li key={idx} className="py-2 flex items-start gap-2">
                <span className="text-xs text-gray-500 dark:text-gray-400 w-20">{item.data}</span>
                <span className="text-gray-800 dark:text-gray-200">{item.descricao}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LayoutBase>
  );
}
