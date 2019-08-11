import {Component, Input, OnInit} from '@angular/core';
import {ICrypto} from '../../interfaces/ICrypto';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  @Input() crypto: ICrypto[];
  constructor() { }

  ngOnInit() {
  }

}
