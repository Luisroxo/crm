-- CreateEnum
CREATE TYPE "public"."ProfileCompletionStatus" AS ENUM ('PENDENTE', 'ACEITO', 'REJEITADO');

-- CreateTable
CREATE TABLE "public"."ia_suggestions" (
    "id" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "contexto" TEXT,
    "dataGerada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT,
    "clienteId" TEXT,
    "leadId" TEXT,
    "empresaId" TEXT,
    "mensagemId" TEXT,

    CONSTRAINT "ia_suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ia_auto_replies" (
    "id" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "contexto" TEXT,
    "dataGerada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mensagemId" TEXT NOT NULL,
    "usuarioId" TEXT,
    "clienteId" TEXT,
    "leadId" TEXT,
    "empresaId" TEXT,

    CONSTRAINT "ia_auto_replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ia_profile_completions" (
    "id" TEXT NOT NULL,
    "campo" TEXT NOT NULL,
    "valorSugerido" TEXT NOT NULL,
    "status" "public"."ProfileCompletionStatus" NOT NULL DEFAULT 'PENDENTE',
    "dataGerada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT,
    "clienteId" TEXT,
    "leadId" TEXT,
    "empresaId" TEXT,

    CONSTRAINT "ia_profile_completions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ia_suggestions" ADD CONSTRAINT "ia_suggestions_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_suggestions" ADD CONSTRAINT "ia_suggestions_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_suggestions" ADD CONSTRAINT "ia_suggestions_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_suggestions" ADD CONSTRAINT "ia_suggestions_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_suggestions" ADD CONSTRAINT "ia_suggestions_mensagemId_fkey" FOREIGN KEY ("mensagemId") REFERENCES "public"."mensagens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_auto_replies" ADD CONSTRAINT "ia_auto_replies_mensagemId_fkey" FOREIGN KEY ("mensagemId") REFERENCES "public"."mensagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_auto_replies" ADD CONSTRAINT "ia_auto_replies_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_auto_replies" ADD CONSTRAINT "ia_auto_replies_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_auto_replies" ADD CONSTRAINT "ia_auto_replies_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_auto_replies" ADD CONSTRAINT "ia_auto_replies_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_profile_completions" ADD CONSTRAINT "ia_profile_completions_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_profile_completions" ADD CONSTRAINT "ia_profile_completions_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_profile_completions" ADD CONSTRAINT "ia_profile_completions_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ia_profile_completions" ADD CONSTRAINT "ia_profile_completions_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
