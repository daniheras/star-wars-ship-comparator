import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemModule } from 'angular-bem';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BemModule
  ],
  exports: [
    BemModule
  ]
})
export class SharedModule { }
