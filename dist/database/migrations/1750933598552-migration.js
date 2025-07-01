"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750933598552 = void 0;
class Migration1750933598552 {
    name = 'Migration1750933598552';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "UQ_240853a0c3353c25fb12434ad33" UNIQUE ("name"), CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "permission"`);
    }
}
exports.Migration1750933598552 = Migration1750933598552;
//# sourceMappingURL=1750933598552-migration.js.map