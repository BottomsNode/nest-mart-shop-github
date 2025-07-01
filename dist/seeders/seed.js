"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_config_1 = require("../config/typeorm.config");
const seed_roles_seeder_1 = require("./seed-roles.seeder");
async function runSeed() {
    try {
        await typeorm_config_1.AppDataSource.initialize();
        console.log('Data Source has been initialized.');
        await (0, seed_roles_seeder_1.seedRoles)(typeorm_config_1.AppDataSource);
        console.log('Roles and permissions have been seeded.');
        await typeorm_config_1.AppDataSource.destroy();
        console.log('Data Source has been destroyed.');
    }
    catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }
}
void runSeed();
//# sourceMappingURL=seed.js.map