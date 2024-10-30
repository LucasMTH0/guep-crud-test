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

  getEnterprise(){
    this.enterpriseService.searchEnterprise(this.activatedRoute.snapshot.params['id'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((enterpriseFound: any) => {
        this.enterprise = enterpriseFound;
      })
  }

  deleteEnterprise(id: string){
    this.enterpriseService.deleteEnterprise(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((deleteEnterpriseResponse) => {
        this.toastr.success("Dados deletados com sucesso.");
        this.router.navigate(['/']);
      })
  }

  async submitUpdateEnterprise(updateEnterpriseForm: Enterprise){
    const userWithSameCNPJRegistered = await this.enterpriseService.getEnterpriseByCNPJ(updateEnterpriseForm.cnpj).then((response) => response.json())
    console.log("form: ", updateEnterpriseForm)
    const enterpriseFormWithID = {...updateEnterpriseForm, id: this.enterprise.id};
    if(userWithSameCNPJRegistered.length > 0 && userWithSameCNPJRegistered[0].id !== this.enterprise.id){
      this.toastr.error("Este CNPJ já foi cadastrado por outro usuário.");
    } else {

      try{
        this.enterpriseService.updateEnterprise(enterpriseFormWithID)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((updateEnterpriseDataResult) => {
            this.toastr.success("Dados atualizados com sucesso!");
            this.router.navigate(['/']);
          })
      } catch (e) {

      }
    }
  }
}
