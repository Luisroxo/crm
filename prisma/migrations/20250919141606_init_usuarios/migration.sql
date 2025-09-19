/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `automation_flows` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `ia_auto_replies` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `ia_profile_completions` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `ia_suggestions` table. All the data in the column will be lost.
  - You are about to drop the column `responsavelId` on the `tarefas` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - Added the required column `nome` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('ATIVO', 'INATIVO');

-- DropForeignKey
ALTER TABLE "public"."automation_flows" DROP CONSTRAINT "automation_flows_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ia_auto_replies" DROP CONSTRAINT "ia_auto_replies_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ia_profile_completions" DROP CONSTRAINT "ia_profile_completions_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ia_suggestions" DROP CONSTRAINT "ia_suggestions_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."tarefas" DROP CONSTRAINT "tarefas_responsavelId_fkey";

-- AlterTable
ALTER TABLE "public"."automation_flows" DROP COLUMN "usuarioId";

-- AlterTable
ALTER TABLE "public"."ia_auto_replies" DROP COLUMN "usuarioId";

-- AlterTable
ALTER TABLE "public"."ia_profile_completions" DROP COLUMN "usuarioId";

-- AlterTable
ALTER TABLE "public"."ia_suggestions" DROP COLUMN "usuarioId";

-- AlterTable
ALTER TABLE "public"."tarefas" DROP COLUMN "responsavelId";

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "name",
DROP COLUMN "role",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "cargo" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "status" "public"."UserStatus" NOT NULL DEFAULT 'ATIVO';
