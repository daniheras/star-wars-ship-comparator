import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { ChartComponent } from './chart.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [BarComponent, ChartComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BarComponent, ChartComponent]
})
export class ChartModule { }
