import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: 'hello.component.html'
})
export class HelloComponent implements OnInit, OnDestroy{

  user = {
    name: 'thang dep trai',
    age: 20
  };

  myColor = 'blue';

  users = [
    {
      name: 'Thắng khoai to',
      age: 24
    },
    {
      name: 'Thắng chim to to',
      age: 24
    },
    {
      name: 'Thắng tay to',
      age: 24
    },
    {
      name: 'Thắng chân to to',
      age: 24
    },
    {
      name: 'Thắng bụng to',
      age: 24
    },
    {
      name: 'Thắng mông to',
      age: 24
    },
    {
      name: 'Thắng mũi to',
      age: 24
    },
    {
      name: 'Thắng khoai to',
      age: 24
    }
  ];

  ngOnInit(): void {
    console.log('component init');
  }

  handleClick(event): void {
    alert('fuck');
    console.log(event);
  }


  ngOnDestroy(): void {
    console.log('component destroy');
  }

}
