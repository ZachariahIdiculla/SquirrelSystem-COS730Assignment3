import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    var nameValue = (<HTMLInputElement>document.getElementById("itemName")).value;
    var priceValue = (<HTMLInputElement>document.getElementById("price")).value;
    console.log(nameValue)
    console.log(priceValue)
  }

}
