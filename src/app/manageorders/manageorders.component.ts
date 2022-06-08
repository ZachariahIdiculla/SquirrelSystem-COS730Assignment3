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

  constructor(private orderService: OrderService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((response: any) =>{
      console.log(response)
    });
    let cmpref = this.viewContainerRef.createComponent(CreatedorderComponent);
    cmpref.instance.orderDetails = "test"
    this.viewContainerRef.createComponent(CreatedorderComponent);
  }

}
