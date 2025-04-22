/*
Warnings:

- A unique constraint covering the columns `[nome]` on the table `DireitoViolado` will be added. If there are existing duplicate values, this will fail.
- A unique constraint covering the columns `[nome]` on the table `Profissao` will be added. If there are existing duplicate values, this will fail.

 */
-- CreateIndex
CREATE UNIQUE INDEX "DireitoViolado_nome_key" ON "DireitoViolado" ("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Profissao_nome_key" ON "Profissao" ("nome");

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_ambitoId_fkey" FOREIGN KEY ("ambitoId") REFERENCES "Ambito" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;