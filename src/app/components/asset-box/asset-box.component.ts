import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asset-box',
  templateUrl: './asset-box.component.html',
  styleUrls: ['./asset-box.component.scss']
})
export class AssetBoxComponent implements OnInit {
  @Input() symbol;
  @Input() price;
  constructor() { }

  ngOnInit() {
  }

}
