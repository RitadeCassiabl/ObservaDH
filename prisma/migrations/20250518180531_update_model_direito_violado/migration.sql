/*
  Warnings:

  - Added the required column `descricao` to the `DireitoViolado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sigla` to the `DireitoViolado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DireitoViolado" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "sigla" TEXT NOT NULL;
