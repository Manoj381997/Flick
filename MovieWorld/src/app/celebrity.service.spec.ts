import { TestBed, inject } from '@angular/core/testing';

import { CelebrityService } from './celebrity.service';

describe('CelebrityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CelebrityService]
    });
  });

  it('should be created', inject([CelebrityService], (service: CelebrityService) => {
    expect(service).toBeTruthy();
  }));
});
