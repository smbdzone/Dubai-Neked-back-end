// billingController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { apiUrl } from '../constants/apiEndpoints';

//GetEmailData
export const getEmailData = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await axios.get(`${apiUrl}GetEmaildata`);
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching email data:', err.message);
      res.status(500).json({ message: 'Failed to fetch email data' });
    }
  };
  
//GetbillingDetails
export const getBillingDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(`${apiUrl}GetBillingDetails`);
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
