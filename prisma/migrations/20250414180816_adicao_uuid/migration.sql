/*
  Warnings:

  - The primary key for the `Ambito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DireitoViolado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Estado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Ideologia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Partido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Politico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Profissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Projeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tema` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_DireitoVioladoToProjeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_IdeologiaToProjeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_PartidoToProjeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_PoliticoToProfissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_ProjetoAutores` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_DireitoVioladoToProjeto" DROP CONSTRAINT "_DireitoVioladoToProjeto_A_fkey";

-- DropForeignKey
ALTER TABLE "_DireitoVioladoToProjeto" DROP CONSTRAINT "_DireitoVioladoToProjeto_B_fkey";

-- DropForeignKey
ALTER TABLE "_IdeologiaToProjeto" DROP CONSTRAINT "_IdeologiaToProjeto_A_fkey";

-- DropForeignKey
ALTER TABLE "_IdeologiaToProjeto" DROP CONSTRAINT "_IdeologiaToProjeto_B_fkey";

-- DropForeignKey
ALTER TABLE "_PartidoToProjeto" DROP CONSTRAINT "_PartidoToProjeto_A_fkey";

-- DropForeignKey
ALTER TABLE "_PartidoToProjeto" DROP CONSTRAINT "_PartidoToProjeto_B_fkey";

-- DropForeignKey
ALTER TABLE "_PoliticoToProfissao" DROP CONSTRAINT "_PoliticoToProfissao_A_fkey";

-- DropForeignKey
ALTER TABLE "_PoliticoToProfissao" DROP CONSTRAINT "_PoliticoToProfissao_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjetoAutores" DROP CONSTRAINT "_ProjetoAutores_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjetoAutores" DROP CONSTRAINT "_ProjetoAutores_B_fkey";

-- AlterTable
ALTER TABLE "Ambito" DROP CONSTRAINT "Ambito_pkey" CASCADE,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Ambito_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "DireitoViolado" DROP CONSTRAINT "DireitoViolado_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "DireitoViolado_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Estado" DROP CONSTRAINT "Estado_pkey" CASCADE,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Estado_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Ideologia" DROP CONSTRAINT "Ideologia_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Ideologia_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Partido" DROP CONSTRAINT "Partido_pkey" CASCADE,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Partido_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Politico" DROP CONSTRAINT "Politico_pkey" CASCADE,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Politico_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Profissao" DROP CONSTRAINT "Profissao_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Profissao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tema" DROP CONSTRAINT "Tema_pkey" CASCADE,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "Tema_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_DireitoVioladoToProjeto" DROP CONSTRAINT "_DireitoVioladoToProjeto_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "B" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "_DireitoVioladoToProjeto_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_IdeologiaToProjeto" DROP CONSTRAINT "_IdeologiaToProjeto_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "B" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "_IdeologiaToProjeto_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_PartidoToProjeto" DROP CONSTRAINT "_PartidoToProjeto_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "B" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "_PartidoToProjeto_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_PoliticoToProfissao" DROP CONSTRAINT "_PoliticoToProfissao_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "B" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "_PoliticoToProfissao_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_ProjetoAutores" DROP CONSTRAINT "_ProjetoAutores_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "B" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "_ProjetoAutores_AB_pkey" PRIMARY KEY ("A", "B");

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
