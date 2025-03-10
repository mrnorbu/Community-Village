/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomestaysService } from './homestays.service';

describe('Service: Homestays', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomestaysService]
    });
  });

  it('should ...', inject([HomestaysService], (service: HomestaysService) => {
    expect(service).toBeTruthy();
  }));
});
