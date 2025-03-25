import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTrafficEventTable1742854378788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'traffic_event',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'timestamp',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'country',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'vehicle_type',
            type: 'enum',
            enum: ['Car', 'Bus', 'Truck', 'Bike', 'Other'],
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await this.seedData(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('traffic_event');
  }

  private async seedData(queryRunner: QueryRunner) {
    const countries = ['USA', 'Germany', 'India', 'Pakistan', 'China'];
    const vehicleTypes = ['Car', 'Bus', 'Truck', 'Bike', 'Other'];

    const values = Array.from({ length: 500 }, () => {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      const randomVehicle = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
      const randomTimestamp = new Date(
        Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000),
      ); // Last 30 days

      return `('${randomTimestamp.toISOString()}', '${randomCountry}', '${randomVehicle}')`;
    }).join(', ');

    const seedQuery = `INSERT INTO traffic_event (timestamp, country, vehicle_type) VALUES ${values};`;

    await queryRunner.query(seedQuery);
  }
}
