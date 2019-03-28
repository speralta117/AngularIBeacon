import { TestBed } from '@angular/core/testing';

import { BeaconProvider.TsService } from './beacon-provider.ts.service';

describe('BeaconProvider.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeaconProvider.TsService = TestBed.get(BeaconProvider.TsService);
    expect(service).toBeTruthy();
  });
});
