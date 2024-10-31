import {Component, DestroyRef, inject} from '@angular/core';
import {NgxMaskDirective} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import {EnterpriseFormComponent} from '../../../components/enterprise-form/enterprise-form.component';
import {EnterpriseService} from '../../../services/enterprise/enterprise.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-create-enterprise',
  styleUrl: './create-enterprise.component.scss',
  imports: [ReactiveFormsModule, NgxMaskDirective, EnterpriseFormComponent],
  templateUrl: './create-enterprise.component.html',
})

export class CreateEnterpriseComponent {
  destroyRef = inject(DestroyRef);
  constructor(
    private enterpriseService: EnterpriseService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  async submitNewEnterpriseForm(newEnterpriseForm: any){
    const formRegister = { ...newEnterpriseForm, created_at: new Date() };
    // const isCNPJisRegistered = await this.enterpriseService.getEnterpriseByCNPJ(formRegister.cnpj).then((response) => response.json())
    // if(isCNPJisRegistered.length > 0){
    //   this.toastr.error("Este CNPJ já foi cadastrado.");
    // } else {
      try {
        this.enterpriseService.createEnterprise(formRegister)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((response) => {
            this.toastr.success("Empresa criada com sucesso!");
            this.router.navigate(['/']);
        })
      } catch (e) {
        console.log(" deu erro bro: ", e)
      }
   // }
  }

}
