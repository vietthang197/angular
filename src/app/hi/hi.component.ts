import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('HiComponent Init Success');
  }
  ngOnDestroy(): void {
    console.log('HiComponent Destroy Success');
  }

}
