import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ManageordersComponent } from './manageorders.component';

describe('ManageordersComponent', () => {
  let component: ManageordersComponent;
  let fixture: ComponentFixture<ManageordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageordersComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output orders', () => {
    expect(component.outputOrders).not.toEqual(null);
  });
});
