import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AddorderComponent } from './addorder.component';

describe('AddorderComponent', () => {
  let component: AddorderComponent;
  let fixture: ComponentFixture<AddorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorderComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear an order', () => {
    expect(component.clearOrder).not.toEqual(null);
  });

  it('should complete an order', () => {
    expect(component.completeOrder).not.toEqual(null);
  });

  it('should output menu items', () => {
    expect(component.outputMenuItems).not.toEqual(null);
  });
});
