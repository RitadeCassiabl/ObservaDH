/*
  Warnings:

  - You are about to drop the column `ambitoId` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the column `pauta` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the column `temaId` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the `Ambito` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tema` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Profissao` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `esferaId` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pautaId` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "ambitoId",
DROP COLUMN "pauta",
DROP COLUMN "temaId",
ADD COLUMN     "esferaId" TEXT NOT NULL,
ADD COLUMN     "pautaId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ambito";

-- DropTable
DROP TABLE "Tema";

-- CreateTable
CREATE TABLE "Esfera" (
    "id" VARCHAR(36) NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Esfera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pauta" (
    "id" VARCHAR(36) NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pauta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pauta_nome_key" ON "Pauta"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Profissao_nome_key" ON "Profissao"("nome");

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_pautaId_fkey" FOREIGN KEY ("pautaId") REFERENCES "Pauta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_esferaId_fkey" FOREIGN KEY ("esferaId") REFERENCES "Esfera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
