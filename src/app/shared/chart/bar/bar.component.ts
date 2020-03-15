import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'swsc-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BarComponent implements OnInit {

  @Input() fill: number;
  @Input() data: { value: string, name: string };

  constructor() { }

  ngOnInit(): void {
  }

}
