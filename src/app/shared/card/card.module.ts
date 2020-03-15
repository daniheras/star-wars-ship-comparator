import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [CardComponent]
})
export class CardModule { }
