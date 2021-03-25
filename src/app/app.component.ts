import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lê Việt Thắng khoai to';
  _toggleData = true;

  set toggleData(val) {
    this._toggleData = val;
  }

  get toggleData() {
    return this._toggleData;
  }

  toggleButton = () => {
    this.toggleData = !this.toggleData;
  }
}
