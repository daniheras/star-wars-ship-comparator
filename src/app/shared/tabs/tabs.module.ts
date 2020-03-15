import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
