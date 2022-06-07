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
  
  createOrder(orderItems: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('orders', { orderItems });
  }

  updateOrder(id: string, orderItems: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`orders/${id}`, { orderItems });
  }

  deleteOrder(id: string) {
    return this.webReqService.delete(`orders/${id}`);
  }
}
