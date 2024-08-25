/*
  Warnings:

  - You are about to drop the column `userId` on the `visit` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_visit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shortUrl" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shortUrlId" TEXT,
    CONSTRAINT "visit_shortUrlId_fkey" FOREIGN KEY ("shortUrlId") REFERENCES "ShortUrl" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_visit" ("city", "country", "createdAt", "id", "shortUrl", "updatedAt") SELECT "city", "country", "createdAt", "id", "shortUrl", "updatedAt" FROM "visit";
DROP TABLE "visit";
ALTER TABLE "new_visit" RENAME TO "visit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
