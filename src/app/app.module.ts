import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Compomnents
import { LoginComponent } from './Components/login/login.component';




// Modules
import { LoginModule } from './Modules/login/login.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
