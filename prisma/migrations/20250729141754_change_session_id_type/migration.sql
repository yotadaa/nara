-- DropForeignKey
ALTER TABLE "ChatHistory" DROP CONSTRAINT "ChatHistory_session_id_fkey";

-- AlterTable
ALTER TABLE "ChatHistory" ALTER COLUMN "session_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ChatHistory" ADD CONSTRAINT "ChatHistory_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "SessionChat"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
