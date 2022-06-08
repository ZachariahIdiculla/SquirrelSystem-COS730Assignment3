import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-createdorder',
  templateUrl: './createdorder.component.html',
  styleUrls: ['./createdorder.component.css']
})
export class CreatedorderComponent implements OnInit {
  @Input() orderItems: string | undefined;
  @Input() orderPrice: number | undefined;
  @Input() orderID: string | undefined;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
