import { AppDataSource } from '../data-source';
import { TrafficEvent } from '../entity';
import { VehicleType } from '../types';

export const getAllTraffic = async () => {
  const trafficRepository = AppDataSource.getRepository(TrafficEvent);

  const trafficData = await trafficRepository.find();

  // Group data by country
  const byCountry: Record<string, { country: string; trafficCount: number }> = {};
  for (const event of trafficData) {
    if (!byCountry[event.country]) {
      byCountry[event.country] = { country: event.country, trafficCount: 0 };
    }
    byCountry[event.country].trafficCount++;
  }

  // Group data by vehicle type
  const byVehicleType: Record<VehicleType, { vehicleType: VehicleType; trafficCount: number }> = {
    Car: { vehicleType: VehicleType.CAR, trafficCount: 0 },
    Bus: { vehicleType: VehicleType.BUS, trafficCount: 0 },
    Truck: { vehicleType: VehicleType.TRUCK, trafficCount: 0 },
    Bike: { vehicleType: VehicleType.BIKE, trafficCount: 0 },
    Other: { vehicleType: VehicleType.OTHER, trafficCount: 0 },
  };

  for (const event of trafficData) {
    if (byVehicleType[event.vehicleType]) {
      byVehicleType[event.vehicleType].trafficCount++;
    }
  }

  return { byCountry: Object.values(byCountry), byVehicleType: Object.values(byVehicleType) };
};
