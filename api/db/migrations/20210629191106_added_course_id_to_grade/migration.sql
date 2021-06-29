-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "courseId" INTEGER;

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
