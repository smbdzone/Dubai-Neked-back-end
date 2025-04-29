// billingController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { apiUrl } from '../constants/apiEndpoints';

//GetEmailData
export const getEmailData = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await axios.get(`${apiUrl}Billing/GetEmaildata`);
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
    const response = await axios.get(`${apiUrl}Billing/GetBillingDetails`);
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

//GetCommonSettingforAgent
export const getCommonSettingsForAgent = async (req: Request, res: Response): Promise<void> => {
    try {
      const { agentId, companyId, intflag } = req.body;
      const response = await axios.post(`${apiUrl}Billing/GetCommonSettingforAgent`, {
        agentId,
        companyId,
        intflag
      });
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching common settings:', err.message);
      res.status(500).json({ message: 'Failed to fetch common settings' });
    }
  };

  ///GetAgentLimitUpdateData

  export const getAgentLimitUpdateData = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await axios.get(`${apiUrl}Billing/GetAgentLimitUpdateData`);
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching agent limit update data:', err.message);
      res.status(500).json({ message: 'Failed to fetch agent limit update data' });
    }
  };

  //GetServiceStatus

  export const getServiceStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id, serviceName, activeStatus, remark } = req.body;
  
      const response = await axios.post(`${apiUrl}Billing/GetServiceStatus`, {
        id,
        serviceName,
        activeStatus,
        remark
      });
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching service status:', err.message);
      res.status(500).json({ message: 'Failed to fetch service status' });
    }
  };


//getServiceDetails
  export const getServiceDetails = async (req: Request, res: Response): Promise<void> => {
    try {
      const { ref_no, agentId, bookingId, detailId, bookingType } = req.body;
  
      const response = await axios.post(`${apiUrl}Billing/GetServiceDetails`, {
        ref_no,
        agentId,
        bookingId,
        detailId,
        bookingType
      });
      res.status(200).json(response.data);
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching service details:', err.message);
      res.status(500).json({ message: 'Failed to fetch service details' });
    }
  };
