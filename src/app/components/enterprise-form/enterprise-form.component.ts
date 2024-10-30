import {Component, DestroyRef, EventEmitter, inject, Input, Output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {State} from '../../types/State';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CountryService} from '../../services/country/country.service';
import {NgxMaskDirective} from 'ngx-mask';

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss'
})
export class EnterpriseFormComponent {
  @Input() variant: "create" | "edit" = "create";
  @Output() submitEnterpriseFormValue = new EventEmitter();

  statesList: State[] = [];
  destroyRef = inject(DestroyRef);
  formEnterprise: FormGroup = new FormGroup({
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

  submitEnterpriseForm(){
    this.submitEnterpriseFormValue.emit(this.formEnterprise.value);
  }

  setLocationValues(location: any){
    this.formEnterprise.get('state')?.setValue(location.estado);
    this.formEnterprise.get('city')?.setValue(location.localidade);
    this.formEnterprise.get('address')?.setValue(location.logradouro);
  }

  searchByCEP(){
    if(this.formEnterprise.value.cep.length == 8){
      this.countryService.getAddressDataByCEP(this.formEnterprise.value.cep)
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
