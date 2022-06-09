import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get inventory', () => {
    expect(service.getInventory).not.toEqual(null);
  });

  it('should create an item', () => {
    expect(service.createItem).not.toEqual(null);
  });

  it('should delete an item', () => {
    expect(service.deleteItem).not.toEqual(null);
  });
});
