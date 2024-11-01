import { TestBed } from '@angular/core/testing';
import { EnterpriseService } from './enterprise.service';
import {HttpClientTestingModule, HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

describe('EnterpriseService', () => {
  let service: EnterpriseService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ provideHttpClientTesting() ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EnterpriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
