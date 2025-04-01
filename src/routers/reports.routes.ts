import { Router } from 'express';
import {
  getReports,
  createReport,
  updateReport,
  deleteReport,
  getReport,
} from '../controllers/reports.controller';
import validate from '../middlewares/validate.middelware';
import ReportsSchemas from '../schemas/reports.schemas';

const router = Router();

// Define routes with specific IDs for update and delete operations
router.get('/reports', getReports);
router.post(
  '/reports',
  validate(ReportsSchemas.createReportSchema),
  createReport,
);
router.put(
  '/reports/:id',
  validate(ReportsSchemas.updateReportSchema),
  updateReport,
);
router.delete('/reports/:id', deleteReport);
router.get('/reports/:id', getReport); // Assuming you want to fetch a specific report by ID

export default router;
