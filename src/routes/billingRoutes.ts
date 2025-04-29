// billingRoutes.ts

import { Router } from 'express';
import { getBillingDetails } from '../controllers/billingController';

const router = Router();

router.get('/billing-details', getBillingDetails);

export default router;
