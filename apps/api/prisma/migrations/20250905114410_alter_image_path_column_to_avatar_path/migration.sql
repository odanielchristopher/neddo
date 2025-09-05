/*
  Warnings:

  - You are about to drop the column `image_path` on the `organizations` table. All the data in the column will be lost.
  - You are about to drop the column `image_path` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."organizations" DROP COLUMN "image_path",
ADD COLUMN     "avatar_path" TEXT;

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "image_path",
ADD COLUMN     "avatar_path" TEXT;
