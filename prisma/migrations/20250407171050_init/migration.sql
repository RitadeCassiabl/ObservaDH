/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "numero_pl" TEXT NOT NULL,
    "pauta" TEXT NOT NULL,
    "justificativa" TEXT NOT NULL,
    "ementa" TEXT NOT NULL,
    "ambitoId" INTEGER NOT NULL,
    "temaId" INTEGER NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Politico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT,
    "sexo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "religiao" TEXT NOT NULL,
    "ideologia" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "estadoId" INTEGER NOT NULL,
    "partidoId" INTEGER NOT NULL,

    CONSTRAINT "Politico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tema" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ambito" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Ambito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DireitoViolado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "DireitoViolado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ideologia" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Ideologia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Profissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PoliticoToProfissao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PoliticoToProfissao_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProjetoAutores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoAutores_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PartidoToProjeto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PartidoToProjeto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DireitoVioladoToProjeto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DireitoVioladoToProjeto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_IdeologiaToProjeto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IdeologiaToProjeto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Projeto_numero_pl_key" ON "Projeto"("numero_pl");

-- CreateIndex
CREATE UNIQUE INDEX "Partido_nome_key" ON "Partido"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Partido_codigo_key" ON "Partido"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "Estado_nome_key" ON "Estado"("nome");

-- CreateIndex
CREATE INDEX "_PoliticoToProfissao_B_index" ON "_PoliticoToProfissao"("B");

-- CreateIndex
CREATE INDEX "_ProjetoAutores_B_index" ON "_ProjetoAutores"("B");

-- CreateIndex
CREATE INDEX "_PartidoToProjeto_B_index" ON "_PartidoToProjeto"("B");

-- CreateIndex
CREATE INDEX "_DireitoVioladoToProjeto_B_index" ON "_DireitoVioladoToProjeto"("B");

-- CreateIndex
CREATE INDEX "_IdeologiaToProjeto_B_index" ON "_IdeologiaToProjeto"("B");

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_ambitoId_fkey" FOREIGN KEY ("ambitoId") REFERENCES "Ambito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PoliticoToProfissao" ADD CONSTRAINT "_PoliticoToProfissao_A_fkey" FOREIGN KEY ("A") REFERENCES "Politico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PoliticoToProfissao" ADD CONSTRAINT "_PoliticoToProfissao_B_fkey" FOREIGN KEY ("B") REFERENCES "Profissao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoAutores" ADD CONSTRAINT "_ProjetoAutores_A_fkey" FOREIGN KEY ("A") REFERENCES "Politico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoAutores" ADD CONSTRAINT "_ProjetoAutores_B_fkey" FOREIGN KEY ("B") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartidoToProjeto" ADD CONSTRAINT "_PartidoToProjeto_A_fkey" FOREIGN KEY ("A") REFERENCES "Partido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartidoToProjeto" ADD CONSTRAINT "_PartidoToProjeto_B_fkey" FOREIGN KEY ("B") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DireitoVioladoToProjeto" ADD CONSTRAINT "_DireitoVioladoToProjeto_A_fkey" FOREIGN KEY ("A") REFERENCES "DireitoViolado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DireitoVioladoToProjeto" ADD CONSTRAINT "_DireitoVioladoToProjeto_B_fkey" FOREIGN KEY ("B") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IdeologiaToProjeto" ADD CONSTRAINT "_IdeologiaToProjeto_A_fkey" FOREIGN KEY ("A") REFERENCES "Ideologia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IdeologiaToProjeto" ADD CONSTRAINT "_IdeologiaToProjeto_B_fkey" FOREIGN KEY ("B") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
