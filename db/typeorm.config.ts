import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env' }),
  ],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
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


