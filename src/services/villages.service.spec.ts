/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VillagesService } from './villages.service';

describe('Service: Villages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillagesService]
    });
  });

  it('should ...', inject([VillagesService], (service: VillagesService) => {
    expect(service).toBeTruthy();
  }));
});
