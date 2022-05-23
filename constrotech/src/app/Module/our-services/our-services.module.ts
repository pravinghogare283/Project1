import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionConsultantComponent } from './construction-consultant/construction-consultant.component';
import { ResconstructionServiceComponent } from './resconstruction-service/resconstruction-service.component';
import { ArchitecturalDesignComponent } from './architectural-design/architectural-design.component';
import { DesignAndConstructionComponent } from './design-and-construction/design-and-construction.component';
import { GreenBuildingComponent } from './green-building/green-building.component';
import { HouseRenovationComponent } from './house-renovation/house-renovation.component';
import { Routes, RouterModule } from '@angular/router';

// const route:Routes=[
//   {path:'architectural-design',component:ArchitecturalDesignComponent},
//   {path:'construction-consultant',component:ConstructionConsultantComponent},
//   {path:'designconstruction',component:DesignAndConstructionComponent},
//   {path:'green-building',component:GreenBuildingComponent},
//   {path:'house-renovation',component:HouseRenovationComponent}, 
//   {path:'reconstruction',component:ResconstructionServiceComponent},
// ]

@NgModule({
  declarations: [
    ConstructionConsultantComponent,
    ResconstructionServiceComponent,
    ArchitecturalDesignComponent,
    DesignAndConstructionComponent,
    GreenBuildingComponent,
    HouseRenovationComponent
  ],
  imports: [
    CommonModule,
    // [RouterModule.forChild(route)]

  ]
})
export class OurServicesModule {
  

 }
