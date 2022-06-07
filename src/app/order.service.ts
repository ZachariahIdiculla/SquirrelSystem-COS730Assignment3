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
  
  createOrder(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('orders', { title });
  }

  updateOrder(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`orders/${id}`, { title });
  }

  deleteOrder(id: string) {
    return this.webReqService.delete(`orders/${id}`);
  }
}
