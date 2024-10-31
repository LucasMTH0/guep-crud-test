import { TestBed } from '@angular/core/testing';

import { EnterpriseService } from './enterprise.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EnterpriseService', () => {
  let service: EnterpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EnterpriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
