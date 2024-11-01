import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFormComponent } from './enterprise-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgxMaskDirective, provideEnvironmentNgxMask} from 'ngx-mask';

describe('EnterpriseFormComponent', () => {
  let component: EnterpriseFormComponent;
  let fixture: ComponentFixture<EnterpriseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EnterpriseFormComponent,
        HttpClientTestingModule
      ],
      providers: [provideEnvironmentNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
