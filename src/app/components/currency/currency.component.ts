import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from '../../interfaces/ICurrency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input() currencies: ICurrency[];
  constructor() { }

  ngOnInit() {
  }

}
