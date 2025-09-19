import React from "react";

export default function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950">
      {/* Sidebar */}
      <aside className="w-20 md:w-56 bg-gray-950 border-r border-gray-800 flex flex-col items-center py-6">
        <div className="mb-8">
          <span className="text-white font-bold text-xl tracking-widest">CRM</span>
        </div>
        <nav className="flex flex-col gap-6 w-full items-center">
          <a href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">Dashboard</a>
          <a href="/clientes" className="text-gray-300 hover:text-blue-400 transition-colors">Clientes</a>
          <a href="/empresas" className="text-gray-300 hover:text-blue-400 transition-colors">Empresas</a>
          <a href="/tarefas" className="text-gray-300 hover:text-blue-400 transition-colors">Tarefas</a>
        </nav>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-gray-950 border-b border-gray-800 flex items-center px-8">
          <span className="text-white text-lg font-semibold">Painel CRM</span>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        {/* Footer */}
        <footer className="h-12 bg-gray-950 border-t border-gray-800 flex items-center justify-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} visao360-plus CRM
        </footer>
      </div>
    </div>
  );
}
