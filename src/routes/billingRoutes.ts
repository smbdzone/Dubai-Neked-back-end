// billingRoutes.ts

import { Router } from "express";
import {
  getBillingDetails,
  getEmailData,
  getCommonSettingsForAgent,
  getAgentLimitUpdateData,
  getServiceStatus,
  getServiceDetails,
} from "../controllers/billingController";

const router = Router();

router.get("/get-email-data", getEmailData);
router.get("/billing-details", getBillingDetails);
router.post("/get-common-settings-forAgent", getCommonSettingsForAgent);
router.get("/get-agent-limit-update-data", getAgentLimitUpdateData);
router.post("/get-service-status", getServiceStatus);
router.post("/get-service-details", getServiceDetails);
export default router;
