"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1750928837934 = void 0;
class Migration1750928837934 {
    name = 'Migration1750928837934';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "UQ_48ce552495d14eae9b187bb6716" UNIQUE ("name"), CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "stock" integer NOT NULL DEFAULT '15', "status" "public"."product_status_enum" NOT NULL DEFAULT '1', CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_item_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "quantity" integer NOT NULL, "priceAtPurchase" numeric(10,2) NOT NULL, "saleId" integer, "productId" integer, CONSTRAINT "PK_de4b3129461f8bc27b6110e5c7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "saleDate" TIMESTAMP NOT NULL DEFAULT now(), "totalAmount" numeric(10,2) NOT NULL, "customerId" integer, CONSTRAINT "PK_7ae2505a1ce8e5b5342d4d4d99c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "roleId" integer, "addressId" integer, CONSTRAINT "UQ_984b2b39df96ed36ab62e7834a3" UNIQUE ("email"), CONSTRAINT "REL_ffa82dbf045e7bee5af6a3dfb3" UNIQUE ("addressId"), CONSTRAINT "PK_8898b6830f057f3f5c239796fa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "street" character varying NOT NULL, "city" character varying NOT NULL, "pincode" character varying NOT NULL, CONSTRAINT "PK_9caf3f954ed5bc66e3fa35eb7e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permissions_permissions" ("rolesId" integer NOT NULL, "permissionsId" integer NOT NULL, CONSTRAINT "PK_b2f4e3f7fbeb7e5b495dd819842" PRIMARY KEY ("rolesId", "permissionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc2b9d46195bb3ed28abbf7c9e" ON "roles_permissions_permissions" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fd4d5d4c7f7ff16c57549b72c6" ON "roles_permissions_permissions" ("permissionsId") `);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" ADD CONSTRAINT "FK_bbcf71d9e99c8f6845bf7c445df" FOREIGN KEY ("saleId") REFERENCES "sale_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" ADD CONSTRAINT "FK_9f2c0b271eb428ddd9e1f2656b5" FOREIGN KEY ("productId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_entity" ADD CONSTRAINT "FK_2753eeb4efae5f96d5d169d6f55" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_entity" ADD CONSTRAINT "FK_714b5aee2f0b27ffd1211f03568" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_entity" ADD CONSTRAINT "FK_ffa82dbf045e7bee5af6a3dfb38" FOREIGN KEY ("addressId") REFERENCES "address_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permissions_permissions" ADD CONSTRAINT "FK_dc2b9d46195bb3ed28abbf7c9e3" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_permissions_permissions" ADD CONSTRAINT "FK_fd4d5d4c7f7ff16c57549b72c6f" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "roles_permissions_permissions" DROP CONSTRAINT "FK_fd4d5d4c7f7ff16c57549b72c6f"`);
        await queryRunner.query(`ALTER TABLE "roles_permissions_permissions" DROP CONSTRAINT "FK_dc2b9d46195bb3ed28abbf7c9e3"`);
        await queryRunner.query(`ALTER TABLE "customer_entity" DROP CONSTRAINT "FK_ffa82dbf045e7bee5af6a3dfb38"`);
        await queryRunner.query(`ALTER TABLE "customer_entity" DROP CONSTRAINT "FK_714b5aee2f0b27ffd1211f03568"`);
        await queryRunner.query(`ALTER TABLE "sale_entity" DROP CONSTRAINT "FK_2753eeb4efae5f96d5d169d6f55"`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" DROP CONSTRAINT "FK_9f2c0b271eb428ddd9e1f2656b5"`);
        await queryRunner.query(`ALTER TABLE "sale_item_entity" DROP CONSTRAINT "FK_bbcf71d9e99c8f6845bf7c445df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd4d5d4c7f7ff16c57549b72c6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc2b9d46195bb3ed28abbf7c9e"`);
        await queryRunner.query(`DROP TABLE "roles_permissions_permissions"`);
        await queryRunner.query(`DROP TABLE "address_entity"`);
        await queryRunner.query(`DROP TABLE "customer_entity"`);
        await queryRunner.query(`DROP TABLE "sale_entity"`);
        await queryRunner.query(`DROP TABLE "sale_item_entity"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
    }
}
exports.Migration1750928837934 = Migration1750928837934;
//# sourceMappingURL=1750928837934-migration.js.map