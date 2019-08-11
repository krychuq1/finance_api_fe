import {Component, Input, OnInit} from '@angular/core';
import {IMetal} from '../../interfaces/IMetal';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit {
  @Input() metals: IMetal[];
  constructor() { }

  ngOnInit() {
  }

}
