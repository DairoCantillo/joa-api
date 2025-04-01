import { z } from 'zod';

class VisitsSchemas {
  public static readonly createVisitSchema = z.object({
    shortUrl: z.string().min(5, 'Short URL is required'),
    country: z.string().min(3, 'Country is required'),
    city: z.string().min(3, 'City is required'),
  });

  static readonly updateVisitSchema = z.object({
    shortUrl: z.string().min(5, 'Short URL is required'),
    country: z.string().min(3, 'Country is required'),
    city: z.string().min(3, 'City is required'),
  });
}

export default VisitsSchemas;
