import { Request, Response } from 'express';
import { trafficService } from '../services';
import { lang } from '../constants';

export const getGroupedEvents = async (_req: Request, res: Response) => {
  try {
    const result = await trafficService.getGroupedEvents();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await trafficService.getEvents(page, limit);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: lang.SomethingWrong });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { country, vehicleType, timestamp } = req.body;
    if (!country || !vehicleType || !timestamp) {
      return res.status(400).json({ message: lang.MissingRequiredFields });
    }

    const newEvent = await trafficService.createEvent(country, vehicleType, new Date(timestamp));
    return res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: lang.SomethingWrong });
  }
};
