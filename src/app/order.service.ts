import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private webReqService: WebRequestService) { }


  getOrders() {
    return this.webReqService.get('orders');
  }
  
  createOrder(orderItems: string, price: Number) {
    // We want to send a web request to create a list
    return this.webReqService.post('orders', { orderItems,price });
  }


  deleteOrder(id: string) {
    return this.webReqService.delete(`orders/${id}`);
  }
}
