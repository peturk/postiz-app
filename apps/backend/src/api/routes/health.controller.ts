import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

type HealthResponse = {
  status: 'ok';
};

@ApiTags('Health')
@Controller('/health')
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return {
      status: 'ok',
    };
  }
}
