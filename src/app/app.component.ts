import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SquirrelSystem';
  @ViewChild('head') head: any;

  clicked(evt : String){
    console.log(evt)
  }
}

