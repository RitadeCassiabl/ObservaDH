/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Politico` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Politico` table. All the data in the column will be lost.
  - You are about to drop the `_PoliticoToProfissao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `esferaId` to the `Politico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Politico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissaoId` to the `Politico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PoliticoToProfissao" DROP CONSTRAINT "_PoliticoToProfissao_A_fkey";

-- DropForeignKey
ALTER TABLE "_PoliticoToProfissao" DROP CONSTRAINT "_PoliticoToProfissao_B_fkey";

-- AlterTable
ALTER TABLE "Politico" DROP COLUMN "dataNascimento",
DROP COLUMN "sexo",
ADD COLUMN     "esferaId" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "profissaoId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_PoliticoToProfissao";

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_esferaId_fkey" FOREIGN KEY ("esferaId") REFERENCES "Esfera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Politico" ADD CONSTRAINT "Politico_profissaoId_fkey" FOREIGN KEY ("profissaoId") REFERENCES "Profissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
