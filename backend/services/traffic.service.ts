import { AppDataSource } from '../data-source';
import { TrafficEvent } from '../entity';

export const getAllTraffic = async () => {
  const trafficRepository = AppDataSource.getRepository(TrafficEvent);

  const byCountry = await trafficRepository
    .createQueryBuilder('traffic')
    .select('traffic.country', 'country')
    .addSelect('COUNT(*)::int', 'trafficCount')
    .groupBy('traffic.country')
    .getRawMany();

  const byVehicleType = await trafficRepository
    .createQueryBuilder('traffic')
    .select('traffic.vehicleType', 'vehicleType')
    .addSelect('COUNT(*)::int', 'trafficCount')
    .groupBy('traffic.vehicleType')
    .getRawMany();

  return { byCountry, byVehicleType };
};
