import {Component} from '@angular/core';
import {NgxMaskDirective} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import {EnterpriseFormComponent} from '../../../components/enterprise-form/enterprise-form.component';
import {EnterpriseService} from '../../../services/enterprise/enterprise.service';

@Component({
  standalone: true,
  selector: 'app-create-enterprise',
  styleUrl: './create-enterprise.component.scss',
  imports: [ReactiveFormsModule, NgxMaskDirective, EnterpriseFormComponent],
  templateUrl: './create-enterprise.component.html',
})

export class CreateEnterpriseComponent {
  constructor(private enterpriseService: EnterpriseService) {}

  submitNewEnterpriseForm(newEnterpriseForm: any){
    const formRegister = { ...newEnterpriseForm, created_at: new Date() };
    newEnterpriseForm.created_at = new Date();
    console.log("Formulário finalizado e componentizado e com data de criação: ", formRegister);

  }

}
