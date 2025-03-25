import { AppDataSource } from '../data-source';
import { TrafficEvent } from '../entity';
import { VehicleType } from '../types';
import { Repository } from 'typeorm';

export class TrafficService {
  private trafficRepository: Repository<TrafficEvent>;

  constructor() {
    this.trafficRepository = AppDataSource.getRepository(TrafficEvent);
  }

  async getGroupedEvents() {
    const byCountry = await this.trafficRepository
      .createQueryBuilder('traffic')
      .select('traffic.country', 'country')
      .addSelect('COUNT(*)::int', 'trafficCount')
      .groupBy('traffic.country')
      .getRawMany();

    const byVehicleType = await this.trafficRepository
      .createQueryBuilder('traffic')
      .select('traffic.vehicleType', 'vehicleType')
      .addSelect('COUNT(*)::int', 'trafficCount')
      .groupBy('traffic.vehicleType')
      .getRawMany();

    return { byCountry, byVehicleType };
  }

  async getEvents(page: number, limit: number) {
    const [data, total] = await this.trafficRepository.findAndCount({
      order: { timestamp: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createEvent(country: string, vehicleType: VehicleType, timestamp: Date) {
    const newEvent = this.trafficRepository.create({ country, vehicleType, timestamp });
    return await this.trafficRepository.save(newEvent);
  }
}

export const trafficService = new TrafficService();
