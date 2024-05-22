/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `pathImage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ConfirmAccountStatus" AS ENUM ('PENDING', 'CONFIRMED');

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "pathImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "ConfirmAccountStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Comment_createAt_idx" ON "Comment"("createAt");

-- CreateIndex
CREATE INDEX "Post_createdAt_idx" ON "Post"("createdAt");

-- CreateIndex
CREATE INDEX "Profile_username_idx" ON "Profile"("username");

-- CreateIndex
CREATE INDEX "User_email_createAt_idx" ON "User"("email", "createAt");
