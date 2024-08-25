/*
  Warnings:

  - You are about to drop the column `Url` on the `ShortUrl` table. All the data in the column will be lost.
  - Added the required column `url` to the `ShortUrl` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ShortUrl" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "ShortUrl_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ShortUrl" ("createdAt", "id", "shortUrl", "updatedAt", "userId") SELECT "createdAt", "id", "shortUrl", "updatedAt", "userId" FROM "ShortUrl";
DROP TABLE "ShortUrl";
ALTER TABLE "new_ShortUrl" RENAME TO "ShortUrl";
CREATE UNIQUE INDEX "ShortUrl_shortUrl_key" ON "ShortUrl"("shortUrl");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
