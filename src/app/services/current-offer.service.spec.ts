import { TestBed } from '@angular/core/testing';

import { CurrentOfferService } from './current-offer.service';

describe('CurrentOfferService', () => {
  let service: CurrentOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
