/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Tema` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Politico" DROP CONSTRAINT "Politico_estadoId_fkey";

-- DropForeignKey
ALTER TABLE "Politico" DROP CONSTRAINT "Politico_partidoId_fkey";

-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_ambitoId_fkey";

-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_temaId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Tema_nome_key" ON "Tema"("nome");

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_ambitoId_fkey" FOREIGN KEY ("ambitoId") REFERENCES "Ambito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
