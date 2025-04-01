import { Router } from 'express';
import {
  createVisit,
  deleteVisit,
  getVisit,
  getVisits,
  updateVisit,
} from '../controllers/visits.controller';
import validate from '../middlewares/validate.middelware';
import VisitsSchemas from '../schemas/visits.schemas';

const router = Router();

router.get('/visits', getVisits);
router.post('/visits', validate(VisitsSchemas.createVisitSchema), createVisit);
router.put(
  '/visits/:id',
  validate(VisitsSchemas.updateVisitSchema),
  updateVisit,
);
router.delete('/visits/:id', deleteVisit);
router.get('/visits/:id', getVisit);

export default router;
