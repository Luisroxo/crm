-- CreateEnum
CREATE TYPE "public"."TriggerType" AS ENUM ('NOVO_LEAD', 'MUDANCA_ETAPA', 'NOVA_MENSAGEM', 'TAREFA_CONCLUIDA', 'CUSTOM');

-- CreateEnum
CREATE TYPE "public"."ActionType" AS ENUM ('ENVIAR_MENSAGEM', 'CRIAR_TAREFA', 'MOVER_LEAD', 'NOTIFICAR_USUARIO', 'CUSTOM');

-- CreateTable
CREATE TABLE "public"."automation_flows" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "leadId" TEXT,
    "clienteId" TEXT,
    "empresaId" TEXT,
    "usuarioId" TEXT,

    CONSTRAINT "automation_flows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."automation_triggers" (
    "id" TEXT NOT NULL,
    "tipo" "public"."TriggerType" NOT NULL,
    "parametros" JSONB,
    "flowId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "automation_triggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."automation_actions" (
    "id" TEXT NOT NULL,
    "tipo" "public"."ActionType" NOT NULL,
    "parametros" JSONB,
    "flowId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "automation_actions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."automation_flows" ADD CONSTRAINT "automation_flows_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."automation_flows" ADD CONSTRAINT "automation_flows_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."automation_flows" ADD CONSTRAINT "automation_flows_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."automation_flows" ADD CONSTRAINT "automation_flows_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."automation_triggers" ADD CONSTRAINT "automation_triggers_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "public"."automation_flows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."automation_actions" ADD CONSTRAINT "automation_actions_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "public"."automation_flows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
