import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an order', () => {
    expect(service.createOrder).not.toEqual(null);
  });

  it('should create delete an order', () => {
    expect(service.deleteOrder).not.toEqual(null);
  });

  it('should get the orders', () => {
    expect(service.getOrders).not.toEqual(null);
  });
});
