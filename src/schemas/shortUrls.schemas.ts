import { z } from "zod";

class ShortUrlsSchemas {
  static createShortUrlSchema = z.object({
    url: z.string().url("Invalid URL"),
    shortUrl: z.string().min(4, "Short URL is required"),
  });
}

export default ShortUrlsSchemas;
