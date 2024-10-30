import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {EnterpriseService} from '../../services/enterprise/enterprise.service';
import {EnterpriseCardComponent} from '../../components/enterprise-card/enterprise-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EnterpriseCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  enterpriseList: any = []
  constructor(protected router: Router, private enterpriseService: EnterpriseService) {
    this.getEnterprises();
  }

  getEnterprises(){
    this.enterpriseService.getEnterprises().subscribe((enterprises) => this.enterpriseList = enterprises);
  }
}
