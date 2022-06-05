import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ManageordersComponent } from './manageorders/manageorders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ManagelabourComponent } from './managelabour/managelabour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddorderComponent,
    ManageordersComponent,
    InventoryComponent,
    ManagelabourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
