import { Component, OnInit } from '@angular/core';
import { TabFields } from 'src/app/shared/tabs/tabs.types';

@Component({
  selector: 'swsc-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit {

  tabs: TabFields = [
    {
      id: 'crew',
      value: 'Crew',
      selected: true
    },
    {
      id: 'costInCredits',
      value: 'Cost in Credits'
    },
    {
      id: 'cargoCapactiy',
      value: 'Cargo Capacity'
    },
    {
      id: 'hyperdriveRating',
      value: 'Hyperdrive Rating'
    },
    {
      id: 'lenght',
      value: 'Length'
    },
    {
      id: 'maxAtmospheringSpeed',
      value: 'Max. Atmosphering Speed'
    },
    {
      id: 'passengers',
      value: 'Passengers'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabId: string) {
    this.tabs = this.tabs.map(tab => ({
      selected: tab.id === tabId,
      id: tab.id,
      value: tab.value
    }));
  }

}
