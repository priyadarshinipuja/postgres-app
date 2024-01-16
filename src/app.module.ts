import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '../db/typeorm.config';
import { ReportModule } from './modules/report/report.module';
//import { APP_PIPE } from '@nestjs/core/constants';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ReportModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //{
    //  provide: APP_PIPE,
    //  useValue: new ValidationPipe({
    //    whitelist: true,
    //  }),
    //},
  ],
})
export class AppModule {
}
