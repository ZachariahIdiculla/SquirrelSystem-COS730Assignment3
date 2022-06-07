import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  Items = ["Burger", "Hotdog", "Fries", "Cooldrink"]
  Prices = [40, 30, 20, 15, 44];
  total: number = 0
  currentOrder: String = "| "

  constructor() { }

  ngOnInit(): void {
  }

  click(itemNum : number){
    this.currentOrder = this.currentOrder + this.Items[itemNum] + " | "
    this.total = this.total + this.Prices[itemNum];
  }

}
