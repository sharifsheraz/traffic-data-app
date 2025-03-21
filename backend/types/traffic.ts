export enum VehicleType {
  Car = 'car',
  Bus = 'bus',
  Truck = 'truck',
  Bike = 'bike',
  Other = 'other',
}

export type Traffic = {
  id: number;
  country: string;
  vehicleType: VehicleType;
  trafficCount: number;
  recordedAt: Date;
};
