import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ManageordersComponent } from './manageorders/manageorders.component';
import { InventoryComponent } from './inventory/inventory.component';

import { CreatedorderComponent } from './createdorder/createdorder.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddorderComponent,
    ManageordersComponent,
    InventoryComponent,
    CreatedorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
