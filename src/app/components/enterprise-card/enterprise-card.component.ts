import {Component, inject, Input} from '@angular/core';
import {Enterprise} from '../../types/Enterprise';
import {Router} from '@angular/router';
import {NgxMaskDirective, NgxMaskPipe} from 'ngx-mask';

@Component({
  selector: 'app-enterprise-card',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe],
  templateUrl: './enterprise-card.component.html',
  styleUrl: './enterprise-card.component.scss'
})
export class EnterpriseCardComponent {
  router = inject(Router)
  @Input() enterprise: Enterprise = {} as Enterprise;

}
