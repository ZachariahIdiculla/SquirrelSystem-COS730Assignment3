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
  @ViewChild("manageorders") manageorders: any;
  @ViewChild("inventory") inventory: any;

  clicked(evt : String){
    if(evt == "add"){
      this.hideall()
      this.addorder.nativeElement.style.display = 'flex'
    }

    if(evt == "mor"){
      this.hideall()
      this.manageorders.nativeElement.style.display = 'flex'
    }

    if(evt == "inv"){
      this.hideall()
      this.inventory.nativeElement.style.display = 'flex'
    }

    if(evt == "mla"){
      this.hideall()
    }
  }

  hideall(){
    this.addorder.nativeElement.style.display = 'none';
    this.manageorders.nativeElement.style.display = 'none';
    this.inventory.nativeElement.style.display = 'none';
  }
}

