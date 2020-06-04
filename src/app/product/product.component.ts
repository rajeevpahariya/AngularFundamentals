import { Component, OnInit } from '@angular/core';
import { Product} from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // We dont need html if there is one line of html code and can be used in template property
  // If we have to write the multiple line then we have to use the bectic character `
  //template: `'<p>product works from template!</p>
  //            <h1>2nd Line!</h1>'`,
  styles: [
    `
    p {
      color: red;
    }
    `
  ],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productCost = 30; // by defualt its public
  private productCost1 = 40; // cant use in product html file;
  private productCost2:number = 50; // to define the data type;

  getProuctCost():number{
    return this.productCost2; // This keyword is required to access the member variable of component.
  }

  product:any={
    id : 123,
    name : "iPhone",
    price : 6753553.98
  } 
// Any data type example
  products:any[]=[
    {
      id : 1234,
      name : "iPhone1",
      price : 25000,
    },
    {
      id : 1235,
      name : "iPhone2",
      price : 50000,
      color : 'red'
    },
    {
      id : 1236,
      name : "iPhone3",
      price : 75000,
      color : 'yellow'
    }
  ]


  customProducts:Product[]=[
    {
      id : 1234,
      name : "iPhone1",
      price : 25000,
      color : 'blue'
    },
    {
      id : 1235,
      //name : "iPhone2",
      price : 50000,
      color : 'red'
    },
    {
      id : 1236,
      name : "iPhone3",
      price : 75000,
      color : 'yellow'
    }
  ]

  // One and Two way bidning examples
  twoWayData = 30;

}
