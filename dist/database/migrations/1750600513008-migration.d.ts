import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Migration1750600513008 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
