"use client";
import React, { useState } from 'react';
import Image from "next/image";

export default function PerfilUsuario() {
  // Mock de dados do usuário
  const [usuario, setUsuario] = useState({
    nome: 'João Silva',
    email: 'joao.silva@empresa.com',
    cargo: 'Administrador',
    avatar: 'https://ui-avatars.com/api/?name=Joao+Silva&background=0D8ABC&color=fff',
  });
  const [editando, setEditando] = useState(false);
  const [alterandoSenha, setAlterandoSenha] = useState(false);
  const [preferencias, setPreferencias] = useState(false);
  const [form, setForm] = useState({ nome: usuario.nome, email: usuario.email, avatar: usuario.avatar });
  const [senhaForm, setSenhaForm] = useState({ atual: '', nova: '', confirmar: '' });
  const [prefsForm, setPrefsForm] = useState({ idioma: 'pt-BR', notificacoes: true, tema: 'claro' });
  const [sucesso, setSucesso] = useState(false);
  const [sucessoSenha, setSucessoSenha] = useState(false);
  const [sucessoPrefs, setSucessoPrefs] = useState(false);
  const [erroSenha, setErroSenha] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlePrefsChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const target = e.target;
    const name = target.name;
    let value: string | boolean = target.value;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      value = target.checked;
    }
    setPrefsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSalvar(e: React.FormEvent) {
    e.preventDefault();
    setUsuario({ ...usuario, ...form });
    setEditando(false);
    setSucesso(true);
    setTimeout(() => setSucesso(false), 2000);
  }

  function handleSenhaChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSenhaForm({ ...senhaForm, [e.target.name]: e.target.value });
  }

  function handleSalvarSenha(e: React.FormEvent) {
    e.preventDefault();
    setErroSenha('');
    if (senhaForm.nova !== senhaForm.confirmar) {
      setErroSenha('A nova senha e a confirmação não coincidem.');
      return;
    }
    // Mock: sempre "sucesso"
    setAlterandoSenha(false);
    setSucessoSenha(true);
    setSenhaForm({ atual: '', nova: '', confirmar: '' });
    setTimeout(() => setSucessoSenha(false), 2000);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 mt-8">
      <div className="flex items-center gap-6 mb-6">
        <Image
          src={usuario.avatar}
          alt="Avatar"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{usuario.nome}</h2>
          <p className="text-gray-500">{usuario.email}</p>
          <span className="inline-block mt-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
            {usuario.cargo}
          </span>
        </div>
      </div>
      {editando ? (
        <form className="flex flex-col gap-4" onSubmit={handleSalvar}>
          <label className="flex flex-col">
            Nome
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="mt-1 border rounded px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 border rounded px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col">
            Avatar (URL)
            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              className="mt-1 border rounded px-3 py-2"
            />
          </label>
          <div className="flex gap-2 mt-2">
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Salvar</button>
            <button type="button" className="py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition" onClick={() => setEditando(false)}>Cancelar</button>
          </div>
        </form>
      ) : alterandoSenha ? (
        <form className="flex flex-col gap-4" onSubmit={handleSalvarSenha}>
          <label className="flex flex-col">
            Senha atual
            <input
              type="password"
              name="atual"
              value={senhaForm.atual}
              onChange={handleSenhaChange}
              className="mt-1 border rounded px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col">
            Nova senha
            <input
              type="password"
              name="nova"
              value={senhaForm.nova}
              onChange={handleSenhaChange}
              className="mt-1 border rounded px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col">
            Confirmar nova senha
            <input
              type="password"
              name="confirmar"
              value={senhaForm.confirmar}
              onChange={handleSenhaChange}
              className="mt-1 border rounded px-3 py-2"
              required
            />
          </label>
          {erroSenha && <div className="text-red-600 text-sm">{erroSenha}</div>}
          <div className="flex gap-2 mt-2">
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Salvar Senha</button>
            <button type="button" className="py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition" onClick={() => setAlterandoSenha(false)}>Cancelar</button>
          </div>
        </form>
      ) : preferencias ? (
        <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setPreferencias(false); setSucessoPrefs(true); setTimeout(() => setSucessoPrefs(false), 2000); }}>
          <label className="flex flex-col">
            Idioma
            <select
              name="idioma"
              value={prefsForm.idioma}
              onChange={handlePrefsChange}
              className="mt-1 border rounded px-3 py-2"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">Inglês (EUA)</option>
              <option value="es-ES">Espanhol</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="notificacoes"
              checked={prefsForm.notificacoes}
              onChange={handlePrefsChange}
            />
            Receber notificações por e-mail
          </label>
          <label className="flex flex-col">
            Tema
            <select
              name="tema"
              value={prefsForm.tema}
              onChange={handlePrefsChange}
              className="mt-1 border rounded px-3 py-2"
            >
              <option value="claro">Claro</option>
              <option value="escuro">Escuro</option>
            </select>
          </label>
          <div className="flex gap-2 mt-2">
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Salvar Preferências</button>
            <button type="button" className="py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition" onClick={() => setPreferencias(false)}>Cancelar</button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setEditando(true)}>Editar Perfil</button>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition" onClick={() => setAlterandoSenha(true)}>Alterar Senha</button>
          <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition" onClick={() => setPreferencias(true)}>Preferências</button>
        </div>
      )}
      {sucesso && (
        <div className="mt-4 text-green-600 font-semibold">Perfil atualizado com sucesso!</div>
      )}
      {sucessoSenha && (
        <div className="mt-4 text-green-600 font-semibold">Senha alterada com sucesso!</div>
      )}
      {sucessoPrefs && (
        <div className="mt-4 text-green-600 font-semibold">Preferências salvas com sucesso!</div>
      )}
    </div>
  );
}
