/*
  Warnings:

  - You are about to drop the column `numero_pl` on the `Projeto` table. All the data in the column will be lost.
  - You are about to drop the column `pauta` on the `Projeto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numeroPl]` on the table `Projeto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numeroPl` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Projeto_numero_pl_key";

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "numero_pl",
DROP COLUMN "pauta",
ADD COLUMN     "numeroPl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Projeto_numeroPl_key" ON "Projeto"("numeroPl");
