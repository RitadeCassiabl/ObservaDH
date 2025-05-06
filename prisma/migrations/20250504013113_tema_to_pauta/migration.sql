/*
  Warnings:

  - You are about to drop the column `temaId` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the `Tema` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pautaId` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_temaId_fkey";

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "temaId",
ADD COLUMN     "pautaId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Tema";

-- CreateTable
CREATE TABLE "Pauta" (
    "id" VARCHAR(36) NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pauta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pauta_nome_key" ON "Pauta"("nome");

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_pautaId_fkey" FOREIGN KEY ("pautaId") REFERENCES "Pauta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
