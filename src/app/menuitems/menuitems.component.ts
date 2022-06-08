import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

}
