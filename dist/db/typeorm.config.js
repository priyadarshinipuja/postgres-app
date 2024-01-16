"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmAsyncConfig = {
    imports: [
        config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env' }),
    ],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        database: configService.get('DB_NAME'),
        password: configService.get('DB_PASSWORD'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
        logging: true
    }),
};
//# sourceMappingURL=typeorm.config.js.map