import {Module} from '@nestjs/common';
import {TuysfModule} from './modules/tuysf/tuysf.module';
import {ConfigModule} from '@nestjs/config';
import {ScheduleModule} from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ScheduleModule.forRoot(),
    TuysfModule
  ],
})
export class AppModule {
}
