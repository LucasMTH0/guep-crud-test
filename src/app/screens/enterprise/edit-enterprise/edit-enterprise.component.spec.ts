import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterpriseComponent } from './edit-enterprise.component';
import {provideToastr} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';
import {provideHttpClient} from '@angular/common/http';
import {provideEnvironmentNgxMask} from 'ngx-mask';

describe('EditEnterpriseComponent', () => {
  let component: EditEnterpriseComponent;
  let fixture: ComponentFixture<EditEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEnterpriseComponent, RouterTestingModule],
      providers: [provideToastr(), provideHttpClient(), provideEnvironmentNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
