import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedorderComponent } from './createdorder.component';

describe('CreatedorderComponent', () => {
  let component: CreatedorderComponent;
  let fixture: ComponentFixture<CreatedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
