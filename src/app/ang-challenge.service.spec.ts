import { TestBed, inject } from '@angular/core/testing';

import { AngChallengeService } from './ang-challenge.service';

describe('AngChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngChallengeService]
    });
  });

  it('should be created', inject([AngChallengeService], (service: AngChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
