import { TestBed, inject } from '@angular/core/testing';

import { ContenutiService } from './contenuti.service';

describe('ContenutiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenutiService]
    });
  });

  it('should be created', inject([ContenutiService], (service: ContenutiService) => {
    expect(service).toBeTruthy();
  }));
});
