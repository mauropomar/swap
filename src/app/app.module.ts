import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar';
import {ToolbarModule} from './shared/toolbar';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NavbarModule, ToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
