-- AlterTable
ALTER TABLE "public"."forgot_password_code" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0;
