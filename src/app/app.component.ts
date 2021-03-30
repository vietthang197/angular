import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lê Việt Thắng khoai to';
  dataUnknow: unknown;

  _toggleData = true;

  set toggleData(val) {
    this._toggleData = val;
  }

  get toggleData() {
    return this._toggleData;
  }

  toggleButton = () => {
    this.toggleData = !this.toggleData;
    let dogServiceImpl = new DogServiceImpl();
    console.log(dogServiceImpl.findAll());
    console.log(dogServiceImpl.findOne());
  }

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


