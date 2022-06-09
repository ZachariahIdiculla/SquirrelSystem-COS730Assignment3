import { MenuitemsComponent } from './../menuitems/menuitems.component';
import { OrderService } from 'src/app/order.service';
import { InventoryService } from '../inventory.service';
import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { response } from 'express';

// PS C:\Users\zacha\Documents\Work\Honours\COS 730\Assignment 3\SquirrelSystem\api> nodemon app.js
// (base) PS C:\Users\zacha\Documents\Work\Honours\COS 730\Assignment 3\SquirrelSystem> ng serve


@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  Items = ["Burger", "Hotdog", "Fries", "Cooldrink"]
  Prices = [40, 30, 20, 15, 44];
  total: number = 0
  currentOrder: string = "| "

  constructor(private orderService: OrderService, private viewContainerRef: ViewContainerRef, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((response : any) =>{
      this.outputMenuItems(response)
    });
  }

  outputMenuItems(inventory : any){
    for(let i = 0;i < inventory.length; i++ ){
      let inventoryComponent = this.viewContainerRef.createComponent(MenuitemsComponent);
      inventoryComponent.instance.itemName = inventory[i]["itemName"]
      inventoryComponent.instance.itemPrice = inventory[i]["price"]
      inventoryComponent.instance.itemID = inventory[i]["_id"]
      inventoryComponent.instance.clickedMenuItem.subscribe(() => {
        this.currentOrder = this.currentOrder + inventory[i]["itemName"] + " | "
        this.total = this.total + inventory[i]["price"];
      });
    }
  }

  click(itemNum : number){
    this.currentOrder = this.currentOrder + this.Items[itemNum] + " | "
    this.total = this.total + this.Prices[itemNum];
  }


  completeOrder(){
    this.orderService.createOrder(this.currentOrder,this.total).subscribe((response: any) =>{
      console.log(response)
    });
    window.location.reload();
  }

  clearOrder(){
    this.total = 0
    this.currentOrder = "| "
  }
}
