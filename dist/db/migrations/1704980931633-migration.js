"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration1704980931633 = void 0;
class Migration1704980931633 {
    constructor() {
        this.name = 'Migration1704980931633';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "year" integer NOT NULL, "lng" integer NOT NULL, "lat" integer NOT NULL, "mileage" integer NOT NULL, "approved" boolean NOT NULL DEFAULT false, "userId" integer, CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_e347c56b008c2057c9887e230aa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_e347c56b008c2057c9887e230aa"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Migration1704980931633 = Migration1704980931633;
//# sourceMappingURL=1704980931633-migration.js.map