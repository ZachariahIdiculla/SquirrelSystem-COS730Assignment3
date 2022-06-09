import { InventoryService } from './../inventory.service';
import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { MenuitemsComponent } from '../menuitems/menuitems.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService : InventoryService, private viewContainerRef: ViewContainerRef) { }

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
        this.inventoryService.deleteItem(inventory[i]["_id"]).subscribe((response : any) =>{
          console.log(response)
          window.location.reload();
        });
      });
    }
  }

  addItem(){
    var nameValue = (<HTMLInputElement>document.getElementById("itemName")).value;
    var priceValue = (<HTMLInputElement>document.getElementById("price")).value;
    var price: number = +priceValue;
    this.inventoryService.createItem(nameValue,price).subscribe((response: any) =>{
      console.log(response)
      window.location.reload();
    });
  }

}
