import { InventoryService } from './../inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService : InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((response : any) =>{
      console.log(response)
    });
  }

  addItem(){
    var nameValue = (<HTMLInputElement>document.getElementById("itemName")).value;
    var priceValue = (<HTMLInputElement>document.getElementById("price")).value;
    var price: number = +priceValue;
    this.inventoryService.createItem(nameValue,price).subscribe((response: any) =>{
      console.log(response)
    });
  }

}
