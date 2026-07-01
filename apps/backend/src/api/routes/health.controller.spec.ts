import 'reflect-metadata';

import { RequestMethod } from '@nestjs/common';
import { METHOD_METADATA, PATH_METADATA } from '@nestjs/common/constants';

import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('maps GET /health for the combined app probe', () => {
    expect(Reflect.getMetadata(PATH_METADATA, HealthController)).toBe('/health');
    expect(
      Reflect.getMetadata(
        PATH_METADATA,
        HealthController.prototype.getHealth
      )
    ).toBe('/');
    expect(
      Reflect.getMetadata(
        METHOD_METADATA,
        HealthController.prototype.getHealth
      )
    ).toBe(RequestMethod.GET);
  });

  it('returns a stable health payload without auth or external services', () => {
    expect(new HealthController().getHealth()).toEqual({
      status: 'ok',
    });
  });
});
