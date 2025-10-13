-- CreateEnum
CREATE TYPE "public"."DealStatus" AS ENUM ('ABERTO', 'GANHO', 'PERDIDO', 'CANCELADO');

-- CreateTable
CREATE TABLE "public"."deals" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DOUBLE PRECISION,
    "status" "public"."DealStatus" NOT NULL DEFAULT 'ABERTO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "funilId" TEXT NOT NULL,
    "etapaId" TEXT NOT NULL,
    "clienteId" TEXT,
    "empresaId" TEXT,
    "leadId" TEXT,
    "responsavelId" TEXT,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_funilId_fkey" FOREIGN KEY ("funilId") REFERENCES "public"."funis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "public"."etapas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deals" ADD CONSTRAINT "deals_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
