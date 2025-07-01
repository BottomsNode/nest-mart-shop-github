"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750600513008 = void 0;
class Migration1750600513008 {
    name = 'Migration1750600513008';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."product_entity_status_enum" RENAME TO "product_entity_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."product_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" TYPE "public"."product_status_enum" USING "status"::"text"::"public"."product_status_enum"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" SET DEFAULT 'active'`);
        await queryRunner.query(`DROP TYPE "public"."product_entity_status_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."product_entity_status_enum_old" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" TYPE "public"."product_entity_status_enum_old" USING "status"::"text"::"public"."product_entity_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ALTER COLUMN "status" SET DEFAULT 'active'`);
        await queryRunner.query(`DROP TYPE "public"."product_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."product_entity_status_enum_old" RENAME TO "product_entity_status_enum"`);
    }
}
exports.Migration1750600513008 = Migration1750600513008;
//# sourceMappingURL=1750600513008-migration.js.map