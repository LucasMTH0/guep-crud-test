import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterpriseComponent } from './edit-enterprise.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';

describe('EditEnterpriseComponent', () => {
  let component: EditEnterpriseComponent;
  let fixture: ComponentFixture<EditEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEnterpriseComponent, ToastrService, ToastrModule]
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
