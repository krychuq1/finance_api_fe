import { TestBed } from '@angular/core/testing';

import { MetalService } from './metal.service';

describe('MetalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalService = TestBed.get(MetalService);
    expect(service).toBeTruthy();
  });
});
