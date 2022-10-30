import { TestBed } from '@angular/core/testing';

import { DataPresetsService } from './data-presets.service';

describe('DataPresetsService', () => {
  let service: DataPresetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPresetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
