import { Component, OnInit } from '@angular/core';
import { TabFields } from 'src/app/shared/tabs/tabs.types';
import { ComparatorService } from './comparator.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'swsc-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit {

  ships$: Observable<any>;
  ships: any[];
  checkedShips: any[];
  tabs: TabFields = [
    {
      id: 'crew',
      value: 'Crew',
      selected: true
    },
    {
      id: 'costInCredits',
      value: 'Cost in Credits',
    },
    {
      id: 'cargoCapacity',
      value: 'Cargo Capacity'
    },
    {
      id: 'hyperdriveRating',
      value: 'Hyperdrive Rating'
    },
    {
      id: 'length',
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
  selectedTab = this.tabs.filter(tab => tab.selected)[0].id;

  constructor(
    public comparatorService: ComparatorService
  ) {
  }

  ngOnInit(): void {
    this.comparatorService.fetchShips();
    this.ships$ = this.comparatorService.ships$.pipe(
      map(ships => {
        return ships.map(ship => ({
          ...ship,
          checked: false
        }));
      }),
      tap(ships => {
        this.ships = ships;
      })
    );
  }

  changeTab(tabId: string) {
    this.tabs = this.tabs.map(tab => ({
      selected: tab.id === tabId,
      id: tab.id,
      value: tab.value
    }));
    this.selectedTab = tabId;
    console.log(this.selectedTab)
  }

  handleChecked(toggledShipId) {
    this.ships = this.ships.map(ship => ({
      ...ship,
      checked: (toggledShipId === ship.id) ? !ship.checked : !!ship.checked
    }));
    this.checkedShips = this.ships.filter(ship => ship.checked);
  }

}
