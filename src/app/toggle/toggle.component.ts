import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-toggle-component',
  templateUrl: 'toggle.component.html'
})
export class ToggleComponent implements OnChanges{
  description = '';
  @Output() toggleColor = new EventEmitter();
  @Input() toggleData = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(changes.toggleData.currentValue);
  }
}
