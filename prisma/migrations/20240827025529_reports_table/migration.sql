-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shortUrl" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shortUrlId" TEXT,
    CONSTRAINT "report_shortUrlId_fkey" FOREIGN KEY ("shortUrlId") REFERENCES "ShortUrl" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
