import { Traffic, VehicleType } from './types';

export const trafficData: Traffic[] = [
  {
    id: 1,
    country: 'USA',
    vehicleType: VehicleType.Car,
    trafficCount: 12000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 2,
    country: 'USA',
    vehicleType: VehicleType.Truck,
    trafficCount: 4500,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 3,
    country: 'Germany',
    vehicleType: VehicleType.Car,
    trafficCount: 9000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 4,
    country: 'Germany',
    vehicleType: VehicleType.Bike,
    trafficCount: 3000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 5,
    country: 'India',
    vehicleType: VehicleType.Car,
    trafficCount: 15000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 6,
    country: 'India',
    vehicleType: VehicleType.Truck,
    trafficCount: 7000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 7,
    country: 'India',
    vehicleType: VehicleType.Bike,
    trafficCount: 22000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 8,
    country: 'China',
    vehicleType: VehicleType.Car,
    trafficCount: 18000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 9,
    country: 'China',
    vehicleType: VehicleType.Truck,
    trafficCount: 8000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
  {
    id: 10,
    country: 'Brazil',
    vehicleType: VehicleType.Bike,
    trafficCount: 6000,
    recordedAt: new Date('2025-03-21T08:00:00Z'),
  },
];
