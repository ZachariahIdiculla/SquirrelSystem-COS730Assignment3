import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private webReqService: WebRequestService) { }

  getInventory() {
    return this.webReqService.get('inventory');
  }
  
  createItem(itemName: string, price: Number) {
    // We want to send a web request to create a list
    return this.webReqService.post('inventory', { itemName,price });
  }

  deleteItem(id: string) {
    return this.webReqService.delete(`inventory/${id}`);
  }
}
