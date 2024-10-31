import {Component, DestroyRef, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {State} from '../../types/State';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CountryService} from '../../services/country/country.service';
import {NgxMaskDirective} from 'ngx-mask';
import {Enterprise} from '../../types/Enterprise';

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss'
})
export class EnterpriseFormComponent implements OnChanges{
  @Input() enterprise: Enterprise | null = null;
  @Input() variant: "create" | "edit" = "create";
  @Output() submitEnterpriseFormValue = new EventEmitter();
  @Output() deleteSelectedEnterprise = new EventEmitter();

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

  constructor(private countryService: CountryService) {
    this.getStates();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.variant == "edit" && this.enterprise){
      this.setEnterpriseSelectedValues()
    }
  }

  setEnterpriseSelectedValues(){
    this.formEnterprise.get('cep')?.setValue(this.enterprise?.cep);
    this.formEnterprise.get('cnpj')?.setValue(this.enterprise?.cnpj);
    this.formEnterprise.get('phone')?.setValue(this.enterprise?.phone);
    this.formEnterprise.get('city')?.setValue(this.enterprise?.city);
    this.formEnterprise.get('name')?.setValue(this.enterprise?.name);
    this.formEnterprise.get('email')?.setValue(this.enterprise?.email);
    this.formEnterprise.get('state')?.setValue(this.enterprise?.state);
    this.formEnterprise.get('address')?.setValue(this.enterprise?.address);
  }

  submitEnterpriseForm(){
    this.submitEnterpriseFormValue.emit(this.formEnterprise.value);
  }

  setLocationValues(location: any){
    this.formEnterprise.get('state')?.setValue(location.estado);
    this.formEnterprise.get('city')?.setValue(location.localidade);
    this.formEnterprise.get('address')?.setValue(location.logradouro);
  }

  async searchByCEP(){
    if(this.formEnterprise.value.cep.length == 8){
      this.setLocationValues( await this.countryService.getAddressDataByCEP(this.formEnterprise.value.cep) )
    }
  }

  async getStates(){
    this.statesList = await this.countryService.getStates();
  }
}
