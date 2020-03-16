import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'swsc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  /*
  set data(value: any[]) {
    this.maxValue = Math.max(...value.map(item => item[this.bindValue]));
    this.items = value;
    console.log('hola')
  }
  */

 @Input()
 set data(data: any[]) {
   this._data = data;
   if (!!this._data && this._data.length >= 2) {
     this.maxValue = this.getMaxValue(data, this._bindValue);
   }
 }
  @Input()
  set bindValue(value: string) {
    this._bindValue = value;
    if (!!this._data && this._data.length >= 2) {
      this.maxValue = this.getMaxValue(this._data, value);
    }
  }
  maxValue: number;
  // tslint:disable-next-line: variable-name
  _bindValue: string;
  // tslint:disable-next-line: variable-name
  _data: any[];

  constructor() { }

  ngOnInit(): void {
  }

  getFillPercentage(value: number) {
    console.log(value, this.maxValue);
    return value / this.maxValue;
  }

  getMaxValue = (data, bindValue) => Math.max(...data.map(item => item[bindValue]));

}
