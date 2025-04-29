// billingController.ts

import { Request, Response } from 'express';
import axios from 'axios';

export const getBillingDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get('https://sandbox.raynatours.com/api/Billing/GetBillingDetails');

    const billingDetails = response.data;

    res.status(200).json({
      success: true,
      data: billingDetails,
    });
  } catch (error: any) {
    console.error('Error fetching billing details:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch billing details',
      error: error.message,
    });
  }
};
