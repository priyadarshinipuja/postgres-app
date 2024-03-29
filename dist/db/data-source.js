"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'user',
    synchronize: false,
    logging: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/migrations/*.ts'],
});
//# sourceMappingURL=data-source.js.map