import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelabourComponent } from './managelabour.component';

describe('ManagelabourComponent', () => {
  let component: ManagelabourComponent;
  let fixture: ComponentFixture<ManagelabourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagelabourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagelabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
