import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { TabFields } from './tabs.types';

@Component({
  selector: 'swsc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {

  @Input() tabs: TabFields;
  @Output() changeTab: EventEmitter<{ tabId: string }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
