import { TestBed, inject } from '@angular/core/testing';

import { ShowService } from './show.service';

describe('ShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowService]
    });
  });

  it('should be created', inject([ShowService], (service: ShowService) => {
    expect(service).toBeTruthy();
  }));
});
