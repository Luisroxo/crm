

import React from "react";
import LayoutBase from "@/components/LayoutBase";

export default function DashboardPage() {
  return (
    <LayoutBase>
      <h1 className="text-3xl font-bold text-white mb-8 tracking-wide">Painel Geral</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card: Mensageiros Recorrentes */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white col-span-1">
          <div className="font-semibold text-lg mb-2">Mensageiros Recorrentes</div>
          <ul className="text-sm space-y-1">
            <li>Messenger: <span className="text-green-400">0</span></li>
            <li>Facebook comments: <span className="text-green-400">0</span></li>
            <li>Instagram: <span className="text-green-400">0</span></li>
            <li>Instagram comments: <span className="text-green-400">0</span></li>
            <li>WhatsApp Lite: <span className="text-green-400">0</span></li>
            <li>Outros: <span className="text-green-400">0</span></li>
          </ul>
        </div>
        {/* Card: Chats Ativos */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Chats Ativos</span>
          <span className="text-4xl font-bold text-blue-400 mt-2">400</span>
        </div>
        {/* Card: Chats Sem Resposta */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Chats Sem Resposta</span>
          <span className="text-4xl font-bold text-yellow-400 mt-2">367</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card: Tempo de Resposta */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Tempo de Resposta</span>
          <span className="text-3xl font-bold text-pink-400 mt-2">11h</span>
        </div>
        {/* Card: Mais Tempo Esperando */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Mais Tempo Esperando</span>
          <span className="text-3xl font-bold text-orange-400 mt-2">70s</span>
        </div>
        {/* Card: Gráfico Circular Placeholder */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-yellow-400 border-b-gray-700 animate-spin-slow flex items-center justify-center">
            <span className="text-white text-xs">[Gráfico Lead]</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: Leads Ganhos */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Leads Ganhos</span>
          <span className="text-3xl font-bold text-green-400 mt-2">0</span>
        </div>
        {/* Card: Leads Ativos */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Leads Ativos</span>
          <span className="text-3xl font-bold text-blue-400 mt-2">729</span>
        </div>
        {/* Card: Tarefas */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-5 text-white flex flex-col items-center justify-center">
          <span className="text-sm text-gray-400">Tarefas</span>
          <span className="text-3xl font-bold text-purple-400 mt-2">0</span>
        </div>
      </div>
    </LayoutBase>
  );
}
