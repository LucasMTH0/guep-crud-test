import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnterpriseComponent } from './create-enterprise.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideToastr} from 'ngx-toastr';
import {provideHttpClient} from '@angular/common/http';
import {provideEnvironmentNgxMask} from 'ngx-mask';

describe('CreateEnterpriseComponent', () => {
  let component: CreateEnterpriseComponent;
  let fixture: ComponentFixture<CreateEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnterpriseComponent],
      providers: [provideToastr(), provideHttpClient(), provideEnvironmentNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
