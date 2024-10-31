import {Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnterpriseService} from '../../../services/enterprise/enterprise.service';
import {Enterprise} from '../../../types/Enterprise';
import {EnterpriseFormComponent} from '../../../components/enterprise-form/enterprise-form.component';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ToastrService} from 'ngx-toastr';
import {EnterpriseCardComponent} from '../../../components/enterprise-card/enterprise-card.component';

@Component({
  selector: 'app-edit-enterprise',
  standalone: true,
  imports: [EnterpriseFormComponent, EnterpriseCardComponent],
  templateUrl: './edit-enterprise.component.html',
  styleUrl: './edit-enterprise.component.scss'
})
export class EditEnterpriseComponent {
  enterprise: any;
  destroyRef = inject(DestroyRef);
  private activatedRoute = inject(ActivatedRoute);
  private enterpriseService = inject(EnterpriseService);

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {
    this.getEnterprise();
  }

  async getEnterprise(){
    this.enterprise = await this.enterpriseService.getEnterpriseByID(this.activatedRoute.snapshot.params['id']);
    this.enterprise = this.enterprise[0]
  }

  async deleteEnterprise(id: string){
    const deleteEnterprise = await this.enterpriseService.deleteEnterprise(id)
    if(deleteEnterprise){
      this.toastr.success("Dados deletados com sucesso.");
      this.router.navigate(['/']);
    }
  }

  async checkIfCNPJIsRegisteredInOtherEnterprise(cnpj: string){
    const userWithSameCNPJRegistered = await this.enterpriseService.getEnterpriseByCNPJ(cnpj)
    return (userWithSameCNPJRegistered.length > 0 && userWithSameCNPJRegistered[0].id !== this.enterprise.id) ? true : false;
  }

  async submitUpdateEnterprise(updateEnterpriseForm: Enterprise){
    if(await this.checkIfCNPJIsRegisteredInOtherEnterprise(updateEnterpriseForm.cnpj)){
      this.toastr.error("Este CNPJ já foi cadastrado por outro usuário.");
    } else {
      try{
          this.enterpriseService.updateEnterprise({...updateEnterpriseForm, id: this.enterprise.id})
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((responseUpdateEnterprise) => {
              this.toastr.success("Dados atualizados com sucesso!");
              this.router.navigate(['/']);
            })
      }catch(error){
        this.toastr.error("Erro ao atualizar os dados, tente novamente.")
      }
    }
  }
}
