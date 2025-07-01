"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750601275400 = void 0;
class Migration1750601275400 {
    name = 'Migration1750601275400';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."product_status_enum" RENAME TO "product_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."product_status_enum" AS ENUM('1', '0')`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" TYPE "public"."product_status_enum" USING "status"::"text"::"public"."product_status_enum"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" SET DEFAULT '1'`);
        await queryRunner.query(`DROP TYPE "public"."product_status_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."product_status_enum_old" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" TYPE "public"."product_status_enum_old" USING "status"::"text"::"public"."product_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" SET DEFAULT 'active'`);
        await queryRunner.query(`DROP TYPE "public"."product_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."product_status_enum_old" RENAME TO "product_status_enum"`);
    }
}
exports.Migration1750601275400 = Migration1750601275400;
//# sourceMappingURL=1750601275400-migration.js.map