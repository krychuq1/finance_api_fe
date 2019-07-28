import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatInputModule,
    MatSelectModule, MatProgressSpinnerModule, CommonModule],
  exports: [MatButtonModule, MatDialogModule, MatInputModule,
    MatSelectModule, MatProgressSpinnerModule],
})
export class MyMaterialModule { }
