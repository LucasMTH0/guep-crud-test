import {Component} from '@angular/core';
import {NgxMaskDirective} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import {EnterpriseFormComponent} from '../../../components/enterprise-form/enterprise-form.component';

@Component({
  standalone: true,
  selector: 'app-create-enterprise',
  styleUrl: './create-enterprise.component.scss',
  imports: [ReactiveFormsModule, NgxMaskDirective, EnterpriseFormComponent],
  templateUrl: './create-enterprise.component.html',
})

export class CreateEnterpriseComponent {
  constructor() {}

  submitNewEnterpriseForm(newEnterpriseForm: any){
    console.log("Formulário finalizado e componentizado: ", newEnterpriseForm);
  }

}
