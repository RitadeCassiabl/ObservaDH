/*
  Warnings:

  - Added the required column `descricao` to the `Ideologia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sigla` to the `Ideologia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ideologia" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "sigla" TEXT NOT NULL;
