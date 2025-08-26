/*
  Warnings:

  - Added the required column `pathname` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."organizations" ADD COLUMN     "pathname" TEXT NOT NULL;
