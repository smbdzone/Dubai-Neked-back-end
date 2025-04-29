// billingRoutes.ts

import { Router } from 'express';
import { getBillingDetails, getEmailData } from '../controllers/billingController';

const router = Router();

router.get('/billing-details', getBillingDetails);

router.get('/get-email-data', getEmailData);
export default router;
