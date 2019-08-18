import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetalService {
  metals: string[];
  constructor() {
    this.metals.push('silver');
    this.metals.push('gold');
  }
}
