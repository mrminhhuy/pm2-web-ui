import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TuysfController } from './tuysf.controller';
import { TuysfService } from './tuysf.service';

@Module({
  imports: [
    PassportModule,
    HttpModule
  ],
  controllers: [TuysfController],
  providers: [
    TuysfService
  ]
})
export class TuysfModule {}
