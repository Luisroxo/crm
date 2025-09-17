-- CreateEnum
CREATE TYPE "public"."StatusTarefa" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA');

-- CreateTable
CREATE TABLE "public"."tarefas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "public"."StatusTarefa" NOT NULL DEFAULT 'PENDENTE',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataLimite" TIMESTAMP(3),
    "dataConclusao" TIMESTAMP(3),
    "clienteId" TEXT,
    "empresaId" TEXT,
    "leadId" TEXT,
    "responsavelId" TEXT,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."tarefas" ADD CONSTRAINT "tarefas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tarefas" ADD CONSTRAINT "tarefas_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tarefas" ADD CONSTRAINT "tarefas_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tarefas" ADD CONSTRAINT "tarefas_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
