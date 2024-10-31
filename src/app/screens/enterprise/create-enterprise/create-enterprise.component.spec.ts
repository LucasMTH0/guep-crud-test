import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnterpriseComponent } from './create-enterprise.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreateEnterpriseComponent', () => {
  let component: CreateEnterpriseComponent;
  let fixture: ComponentFixture<CreateEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnterpriseComponent, HttpClientTestingModule],
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
