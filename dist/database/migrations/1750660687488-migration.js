"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750660687488 = void 0;
class Migration1750660687488 {
    name = 'Migration1750660687488';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "stock" SET DEFAULT '15'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "stock" DROP DEFAULT`);
    }
}
exports.Migration1750660687488 = Migration1750660687488;
//# sourceMappingURL=1750660687488-migration.js.map