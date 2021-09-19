import { TestBed } from '@angular/core/testing';

import { PersonalDataStatusService } from './personal-data-status.service';

describe('PersonalDataStatusService', () => {
  let service: PersonalDataStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDataStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
