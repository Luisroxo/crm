import React, { useState } from "react";
import LayoutBase from "@/components/LayoutBase";


export default function ClienteFormPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    celular: "",
    email: "",
    posicao: "",
    telComercial: "",
    emailComercialEmpresa: "",
    site: "",
    endereco: "",
  });
  const [erros, setErros] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErros((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validarCampos() {
    const novosErros: { [k: string]: string } = {};
    if (!form.nome.trim()) novosErros.nome = "Nome é obrigatório";
    if (!form.celular.trim()) novosErros.celular = "Celular é obrigatório";
    if (!form.email.trim()) novosErros.email = "E-mail comercial é obrigatório";
    return novosErros;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem(null);
    const novosErros = validarCampos();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }
    setLoading(true);
    try {
      // Mock de integração com API REST
      const resp = await fetch("/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!resp.ok) throw new Error("Erro ao salvar cliente");
      setMensagem("Cliente salvo com sucesso!");
      setForm({
        nome: "",
        empresa: "",
        celular: "",
        email: "",
        posicao: "",
        telComercial: "",
        emailComercialEmpresa: "",
        site: "",
        endereco: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMensagem(err.message || "Erro ao salvar cliente");
      } else {
        setMensagem("Erro ao salvar cliente");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <LayoutBase>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6 mt-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Cadastro/Edição de Cliente</h2>
        {mensagem && (
          <div className={`mb-4 text-sm font-medium ${mensagem.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>{mensagem}</div>
        )}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} noValidate>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome <span className="text-red-500">*</span></label>
            <input name="nome" value={form.nome} onChange={handleChange} className={`mt-1 w-full px-3 py-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${erros.nome ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
            {erros.nome && <span className="text-xs text-red-500">{erros.nome}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Empresa</label>
            <input name="empresa" value={form.empresa} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Celular <span className="text-red-500">*</span></label>
            <input name="celular" value={form.celular} onChange={handleChange} className={`mt-1 w-full px-3 py-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${erros.celular ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
            {erros.celular && <span className="text-xs text-red-500">{erros.celular}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail comercial <span className="text-red-500">*</span></label>
            <input name="email" value={form.email} onChange={handleChange} className={`mt-1 w-full px-3 py-2 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${erros.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
            {erros.email && <span className="text-xs text-red-500">{erros.email}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Posição</label>
            <input name="posicao" value={form.posicao} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tel. comercial</label>
            <input name="telComercial" value={form.telComercial} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail comercial (empresa)</label>
            <input name="emailComercialEmpresa" value={form.emailComercialEmpresa} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Site</label>
            <input name="site" value={form.site} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Endereço</label>
            <input name="endereco" value={form.endereco} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div className="col-span-2 flex justify-end mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-60" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </LayoutBase>
  );
}
