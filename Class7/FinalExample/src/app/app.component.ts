import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  // name = 'Karla';

  // However, it's recommended to use typescript here, so we can specify why value are we expecting

  // lastname:string = 'Polo';

  constructor(){
    // console.log(12345);
    // this.lastname = 'Palmer';
    // this.changeName('Brandon');
    // this.myFunction();
  }

  // You can also have declare a function and call it in the constructor

  // changeName = (name:string)=>{
  //     this.name = name;
  // }

  // myFunction = ()=>{
  //   console.log('CLICK!!!');
  // }


}
