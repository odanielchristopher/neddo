/*
  Warnings:

  - You are about to drop the column `attempts` on the `forgot_password_code` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."forgot_password_code" DROP COLUMN "attempts";
