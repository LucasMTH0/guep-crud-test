import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFormComponent } from './enterprise-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgxMaskDirective} from 'ngx-mask';

describe('EnterpriseFormComponent', () => {
  let component: EnterpriseFormComponent;
  let fixture: ComponentFixture<EnterpriseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxMaskDirective,
        EnterpriseFormComponent,
        HttpClientTestingModule
      ],
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
