import {Component, Input, OnInit} from '@angular/core';
import {IStock} from '../../interfaces/IStock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  @Input() stocks: IStock[];
  constructor() { }

  ngOnInit() {
  }

}
