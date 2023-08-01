import {
  Controller,
  Get,
  HttpCode,
  Query
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { TuysfService } from './tuysf.service';

@ApiTags('deploy')
@ApiBearerAuth()
@Controller('deploy')
export class TuysfController {
  constructor(
    private readonly tuysfService: TuysfService,
  ) {}

  @Get('/execute')
  @HttpCode(200)
  @ApiOperation({ summary: '' })
  async executeDeploy(@Query() platform: any) {
    return await this.tuysfService.executeDeploy(platform);
  }
}