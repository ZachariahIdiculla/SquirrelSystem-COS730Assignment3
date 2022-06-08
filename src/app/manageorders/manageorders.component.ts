import { OrderService } from 'src/app/order.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { response } from 'express';
import { CreatedorderComponent } from '../createdorder/createdorder.component';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manageorders.component.html',
  styleUrls: ['./manageorders.component.css']
})
export class ManageordersComponent implements OnInit {
  @ViewChild('appenHere') head: any;
  output: any;
  

  constructor(private orderService: OrderService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    output : JSON;
    this.orderService.getOrders().subscribe((response : any) =>{
      this.outputOrders(response)
    });
   
  }

  outputOrders(orders : any){
    for(let i = 0;i < orders.length; i++ ){
      let orderComponent = this.viewContainerRef.createComponent(CreatedorderComponent);
      orderComponent.instance.orderItems = orders[i]["orderItems"]
      orderComponent.instance.orderPrice = orders[i]["price"]
      orderComponent.instance.orderID = orders[i]["_id"]
    }
  }

}
