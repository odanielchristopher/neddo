/*
  Warnings:

  - Added the required column `code` to the `forgot_password_code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."forgot_password_code" ADD COLUMN     "code" TEXT NOT NULL;
