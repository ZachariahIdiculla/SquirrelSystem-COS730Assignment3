import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {
  @Input() itemName: string | undefined;
  @Input() itemPrice: number | undefined;
  @Input() itemID: string | undefined;
  @Output() clickedMenuItem: EventEmitter<any> = new EventEmitter();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  clickMenuItem(){
    const otp = {
      "itemName":this.itemName,
      "itemPrice":this.itemPrice
    }
    this.clickedMenuItem.emit("test")
  }

}
