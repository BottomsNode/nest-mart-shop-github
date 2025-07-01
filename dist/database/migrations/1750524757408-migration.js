"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750524757408 = void 0;
class Migration1750524757408 {
    name = 'Migration1750524757408';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "address_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "street" character varying NOT NULL, "city" character varying NOT NULL, "pincode" character varying NOT NULL, CONSTRAINT "PK_9caf3f954ed5bc66e3fa35eb7e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."product_entity_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "stock" integer NOT NULL, "status" "public"."product_entity_status_enum" NOT NULL DEFAULT 'active', CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_item_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "quantity" integer NOT NULL, "priceAtPurchase" numeric(10,2) NOT NULL, "saleId" integer, "productId" integer, CONSTRAINT "PK_de4b3129461f8bc27b6110e5c7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "saleDate" TIMESTAMP NOT NULL DEFAULT now(), "totalAmount" numeric(10,2) NOT NULL, "customerId" integer, CONSTRAINT "PK_7ae2505a1ce8e5b5342d4d4d99c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."customer_entity_role_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`CREATE TABLE "customer_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "role" "public"."customer_entity_role_enum" NOT NULL DEFAULT 'user', "addressId" integer, CONSTRAINT "UQ_984b2b39df96ed36ab62e7834a3" UNIQUE ("email"), CONSTRAINT "REL_ffa82dbf045e7bee5af6a3dfb3" UNIQUE ("addressId"), CONSTRAINT "PK_8898b6830f057f3f5c239796fa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" ADD CONSTRAINT "FK_bbcf71d9e99c8f6845bf7c445df" FOREIGN KEY ("saleId") REFERENCES "sale_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" ADD CONSTRAINT "FK_9f2c0b271eb428ddd9e1f2656b5" FOREIGN KEY ("productId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_entity" ADD CONSTRAINT "FK_2753eeb4efae5f96d5d169d6f55" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_entity" ADD CONSTRAINT "FK_ffa82dbf045e7bee5af6a3dfb38" FOREIGN KEY ("addressId") REFERENCES "address_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "customer_entity" DROP CONSTRAINT "FK_ffa82dbf045e7bee5af6a3dfb38"`);
        await queryRunner.query(`ALTER TABLE "sale_entity" DROP CONSTRAINT "FK_2753eeb4efae5f96d5d169d6f55"`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" DROP CONSTRAINT "FK_9f2c0b271eb428ddd9e1f2656b5"`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" DROP CONSTRAINT "FK_bbcf71d9e99c8f6845bf7c445df"`);
        await queryRunner.query(`DROP TABLE "customer_entity"`);
        await queryRunner.query(`DROP TYPE "public"."customer_entity_role_enum"`);
        await queryRunner.query(`DROP TABLE "sale_entity"`);
        await queryRunner.query(`DROP TABLE "sale_item_entity"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TYPE "public"."product_entity_status_enum"`);
        await queryRunner.query(`DROP TABLE "address_entity"`);
    }
}
exports.Migration1750524757408 = Migration1750524757408;
//# sourceMappingURL=1750524757408-migration.js.map