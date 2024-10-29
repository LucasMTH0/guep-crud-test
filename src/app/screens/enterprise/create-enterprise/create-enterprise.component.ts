import {State} from '../../../types/State';
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CountryService} from '../../../services/country.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  selector: 'app-create-enterprise',
  styleUrl: './create-enterprise.component.scss',
  templateUrl: './create-enterprise.component.html',
})

export class CreateEnterpriseComponent {
  statesList: State[] = [];
  destroyRef = inject(DestroyRef);

  formNewEnterprise: FormGroup = new FormGroup({
    cep: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ]),
    cnpj: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ]),
    city: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(
    private countryService: CountryService
  ) {
    this.getStates();
  }

  submitNewEnterpriseForm(){
    console.log("Formulário finalizado: ", this.formNewEnterprise.value);
  }

  setLocationValues(location: any){
    this.formNewEnterprise.get('state')?.setValue(location.estado);
    this.formNewEnterprise.get('city')?.setValue(location.localidade);
    this.formNewEnterprise.get('address')?.setValue(location.logradouro);
  }

  searchByCEP(){
    if(this.formNewEnterprise.value.cep.length == 8){
      this.countryService.getAddressDataByCEP(this.formNewEnterprise.value.cep)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((cepResult: any) =>this.setLocationValues(cepResult));
    }
  }

  getStates(){
    this.countryService.getStates()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((states) => this.statesList = states as State[]);
  }
}
