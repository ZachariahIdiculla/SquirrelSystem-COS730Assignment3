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
});
