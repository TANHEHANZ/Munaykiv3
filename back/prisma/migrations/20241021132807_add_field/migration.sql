/*
  Warnings:

  - Added the required column `photo` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "photo" TEXT NOT NULL;
