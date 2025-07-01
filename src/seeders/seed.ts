import 'reflect-metadata';
import { AppDataSource } from '../config/typeorm.config';
import { seedRoles } from './seed-roles.seeder';

async function runSeed() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized.');

    await seedRoles(AppDataSource);
    console.log('Roles and permissions have been seeded.');

    await AppDataSource.destroy();
    console.log('Data Source has been destroyed.');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

void runSeed();
