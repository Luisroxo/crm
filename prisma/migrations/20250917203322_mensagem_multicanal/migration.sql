-- CreateEnum
CREATE TYPE "public"."Canal" AS ENUM ('WHATSAPP', 'INSTAGRAM', 'EMAIL', 'SMS', 'OUTRO');

-- CreateTable
CREATE TABLE "public"."mensagens" (
    "id" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "canal" "public"."Canal" NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remetente" TEXT,
    "destinatario" TEXT,
    "clienteId" TEXT,
    "empresaId" TEXT,
    "leadId" TEXT,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."mensagens" ADD CONSTRAINT "mensagens_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensagens" ADD CONSTRAINT "mensagens_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mensagens" ADD CONSTRAINT "mensagens_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;
