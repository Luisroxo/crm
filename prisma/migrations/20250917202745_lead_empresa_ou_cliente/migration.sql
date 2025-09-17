/*
  Warnings:

  - You are about to drop the column `empresa` on the `leads` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."leads" DROP COLUMN "empresa",
ADD COLUMN     "clienteId" TEXT,
ADD COLUMN     "empresaId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."leads" ADD CONSTRAINT "leads_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leads" ADD CONSTRAINT "leads_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
