import { render, screen } from "@testing-library/react";
import DashboardPage from "./page";
import "@testing-library/jest-dom";

describe("DashboardPage", () => {
  it("deve renderizar o título do dashboard", () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Painel Geral/i)).toBeInTheDocument();
  });

  it("deve exibir os cards principais", () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Mensageiros Recorrentes/i)).toBeInTheDocument();
    expect(screen.getByText(/Chats Ativos/i)).toBeInTheDocument();
    expect(screen.getByText(/Chats Sem Resposta/i)).toBeInTheDocument();
    expect(screen.getByText(/Tempo de Resposta/i)).toBeInTheDocument();
    expect(screen.getByText(/Mais Tempo Esperando/i)).toBeInTheDocument();
    expect(screen.getByText(/Leads Ganhos/i)).toBeInTheDocument();
    expect(screen.getByText(/Leads Ativos/i)).toBeInTheDocument();
    expect(screen.getByText(/Tarefas/i)).toBeInTheDocument();
  });
});
