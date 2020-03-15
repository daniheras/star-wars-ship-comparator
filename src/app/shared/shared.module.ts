import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemModule } from 'angular-bem';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BemModule,
    FormsModule
  ],
  exports: [
    BemModule,
    FormsModule
  ]
})
export class SharedModule { }
