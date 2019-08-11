import {Component, Input, OnInit} from '@angular/core';
import {ICrypto} from '../../interfaces/ICrypto';
import {IMetal} from '../../interfaces/IMetal';
import {IStock} from '../../interfaces/IStock';

@Component({
  selector: 'app-asset-box',
  templateUrl: './asset-box.component.html',
  styleUrls: ['./asset-box.component.scss']
})
export class AssetBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
