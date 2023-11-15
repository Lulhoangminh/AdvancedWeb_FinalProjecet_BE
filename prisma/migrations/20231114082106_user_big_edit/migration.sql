/*
  Warnings:

  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_phone_number_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone_number",
DROP COLUMN "username",
ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "hashedRt" TEXT;
