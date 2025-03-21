import { Request, Response } from 'express';
import { getAllTraffic } from '../services';

export const all = async (req: Request, res: Response) => {
  try {
    const result = await getAllTraffic();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Something went wrong' });
  }
};
