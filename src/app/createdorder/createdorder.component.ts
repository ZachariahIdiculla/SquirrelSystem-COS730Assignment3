import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-createdorder',
  templateUrl: './createdorder.component.html',
  styleUrls: ['./createdorder.component.css']
})
export class CreatedorderComponent implements OnInit {
  @Input() orderItems: string | undefined;
  @Input() orderPrice: number | undefined;
  @Input() orderID: string | undefined;

  constructor(private orderService: OrderService) {
    
  }

  ngOnInit(): void {
  }

  deleteButton(){
    let DeleteMe = this.orderID!
    this.orderService.deleteOrder(DeleteMe).subscribe((response : any) =>{
      console.log(response)
    });
    window.location.reload();
  }

}
