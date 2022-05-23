import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationComponent } from './education/education.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidentialComponent } from './residential/residential.component';



@NgModule({
  declarations: [
    CommercialComponent,
    EducationComponent,
    IndustrialComponent,
    ResidentialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
