import { OrderService } from 'src/app/order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { response } from 'express';

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

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  click(itemNum : number){
    this.currentOrder = this.currentOrder + this.Items[itemNum] + " | "
    this.total = this.total + this.Prices[itemNum];
  }

  completeOrder(){
    this.orderService.createOrder(this.currentOrder).subscribe((response: any) =>{
      console.log(response)
    });
  }
}
