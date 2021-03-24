import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-progressbar',
  template: `<div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div
      class="progress"
      [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
    ></div>
  </div>`,
  styles: [
    `.progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }`
  ]
})
export class ProgressbarComponent implements OnInit, OnChanges{
  backgroundColor = '#ccc';
  progressColor = 'tomato';
  private _progress = 50;

  @Input() set progress(val: number) {
    this._progress = val;
  }

  get progress(): number {
    return this._progress;
  }


  constructor() {
    console.log('backgroundColor: ' + this.backgroundColor + ', progressColor: ' + this.progressColor + ', progress: ' + this.progress);
  }

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void {
    console.log('backgroundColor: ' + this.backgroundColor + ', progressColor: ' + this.progressColor + ', progress: ' + this.progress);
  }
}
