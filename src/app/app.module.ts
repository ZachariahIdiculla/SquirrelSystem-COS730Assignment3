import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddorderComponent } from './addorder/addorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddOrderComponent,
    AddorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
