import {Component, OnInit, ViewChild} from '@angular/core';
import {ToggleComponent} from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Lê Việt Thắng khoai to';
  dataUnknow: unknown;

  @ViewChild('toggleComponent', {static: true}) toggleComp: ToggleComponent;

  _toggleData = true;

  set toggleData(val) {
    this._toggleData = val;
  }

  get toggleData() {
    return this._toggleData;
  }

  ngOnInit(): void {
    console.log('ViewChild static true: ', this.toggleComp)
  }

  toggleButton = () => {
    this.toggleData = !this.toggleData;
    let dogServiceImpl = new DogServiceImpl();
    let myDog: Dog = dogServiceImpl.findOne();
    console.log('xxx');
    console.log(myDog);
    console.log({...myDog})
    this.toggleComp.viewChildLogNow();
  };

  public testNever(con: boolean): string | never {
    if (con) {
      throw new Error('mother fucker');
    } else {
      return 'oke em';
    }
  }
}

interface BaseService<T> {
  findOne(): T;
  findAll(): T[];
}

interface Dog {
  name: string;
}

export class DogServiceImpl implements BaseService<Dog>{
  findAll(): Dog[] {
    let listDog: Dog[] = [];
    let dog1: Dog = {
      name: 'Day la con cho 1'
    };
    let dog2: Dog = {
      name: 'Day la con cho 2'
    };
    listDog.push(dog1);
    listDog.push(dog2);
    return listDog;
  }

  findOne(): Dog {
    let dog: Dog = {
      name: 'Day la con cho'
    };
    return dog;
  }
}

function merge<T1, T2>(o1: T1, o2:T2): T1&T2 {
  return {...o1, ...o2};
}


