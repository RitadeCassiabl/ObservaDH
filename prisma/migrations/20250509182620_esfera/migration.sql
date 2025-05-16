/*
  Warnings:

  - You are about to drop the column `ambitoId` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the `Ambito` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `esferaId` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_ambitoId_fkey";

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "ambitoId",
ADD COLUMN     "esferaId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ambito";

-- CreateTable
CREATE TABLE "Esfera" (
    "id" VARCHAR(36) NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Esfera_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_esferaId_fkey" FOREIGN KEY ("esferaId") REFERENCES "Esfera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
