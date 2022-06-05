import { AddorderComponent } from './addorder/addorder.component';
import { Component, ViewChild } from '@angular/core';
import * as e from 'express';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SquirrelSystem';
  @ViewChild('head') head: any;
  @ViewChild("addorder") addorder: any;

  clicked(evt : String){
    if(evt != "add"){
      this.addorder.nativeElement.style.display = 'none';
    }
    else{
      this.addorder.nativeElement.style.display = 'flex';
    }
  }
}

