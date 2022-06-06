import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  Item1: String = "Burger"
  Item2: String = "Hotdog"
  Item3: String = "Fries"
  Item4: String = "Cooldrink"
  Price1: Number = 40
  Price2: Number = 30
  Price3: Number = 20
  Price4: Number = 15
  constructor() { }

  ngOnInit(): void {
  }

}
