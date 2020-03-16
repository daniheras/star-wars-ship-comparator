import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'swsc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() padded: boolean | string = false;
  @Input() checked: boolean | string = false;
  @Output() check: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.checkRequirements();
  }

  checkRequirements() {
    if (this.padded === '') {
      this.padded = true;
    }

    if (this.checked === '') {
      this.checked = true;
    }
  }

  toggleCheckedStatus() {
    this.checked = !this.checked;
    this.check.emit();
  }

}
