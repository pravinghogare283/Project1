import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FutureWorkComponent } from './future-work/future-work.component';
import { OffersComponent } from './offers/offers.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    FutureWorkComponent,
    OffersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
