-- CreateTable
CREATE TABLE "public"."funis" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "funis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."etapas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "funilId" TEXT NOT NULL,

    CONSTRAINT "etapas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."leads" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contato" TEXT,
    "empresa" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etapaId" TEXT NOT NULL,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."movimentacoes" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "etapaOrigemId" TEXT,
    "etapaDestinoId" TEXT NOT NULL,
    "dataMovimentacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacao" TEXT,

    CONSTRAINT "movimentacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."etapas" ADD CONSTRAINT "etapas_funilId_fkey" FOREIGN KEY ("funilId") REFERENCES "public"."funis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leads" ADD CONSTRAINT "leads_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "public"."etapas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movimentacoes" ADD CONSTRAINT "movimentacoes_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."leads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movimentacoes" ADD CONSTRAINT "movimentacoes_etapaOrigemId_fkey" FOREIGN KEY ("etapaOrigemId") REFERENCES "public"."etapas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movimentacoes" ADD CONSTRAINT "movimentacoes_etapaDestinoId_fkey" FOREIGN KEY ("etapaDestinoId") REFERENCES "public"."etapas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
