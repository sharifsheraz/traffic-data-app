import { trafficData } from '../trafficData';

export const getAllTraffic = async () => {
  const data = await new Promise(resolve => setTimeout(() => resolve(trafficData), 500));
  return data;
};
