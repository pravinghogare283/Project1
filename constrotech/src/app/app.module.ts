import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared folder/header/header.component';
import { FooterComponent } from './shared folder/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PuneComponent } from './city/pune/pune.component';
import { MumbaiComponent } from './city/mumbai/mumbai.component';
import { MahindraComponent } from './developers/mahindra/mahindra.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PuneComponent,
    MumbaiComponent,
    MahindraComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
