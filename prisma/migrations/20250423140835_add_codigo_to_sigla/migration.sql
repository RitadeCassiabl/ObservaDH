/*
  Warnings:

  - You are about to drop the column `codigo` on the `Partido` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sigla]` on the table `Partido` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sigla` to the `Partido` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Partido_codigo_key";

-- AlterTable
ALTER TABLE "Partido" DROP COLUMN "codigo",
ADD COLUMN     "sigla" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Partido_sigla_key" ON "Partido"("sigla");
