/*
  Warnings:

  - Made the column `courseId` on table `Grade` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Grade" ALTER COLUMN "courseId" SET NOT NULL;
