import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparatorRoutingModule } from './comparator-routing.module';
import { ComparatorComponent } from './comparator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from 'src/app/shared/card/card.module';


@NgModule({
  declarations: [ComparatorComponent],
  imports: [
    CommonModule,
    ComparatorRoutingModule,
    SharedModule,
    CardModule
  ]
})
export class ComparatorModule {}
