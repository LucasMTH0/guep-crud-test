import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCardComponent } from './enterprise-card.component';
import {NgxMaskDirective, provideEnvironmentNgxMask} from 'ngx-mask';

describe('EnterpriseCardComponent', () => {
  let component: EnterpriseCardComponent;
  let fixture: ComponentFixture<EnterpriseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseCardComponent, NgxMaskDirective],
      providers: [provideEnvironmentNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
