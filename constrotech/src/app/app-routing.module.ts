import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MumbaiComponent } from './city/mumbai/mumbai.component';
import { PuneComponent } from './city/pune/pune.component';
import { MahindraComponent } from './developers/mahindra/mahindra.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './Module/home/about-us/about-us.component';
import { FutureWorkComponent } from './Module/home/future-work/future-work.component';
import { OffersComponent } from './Module/home/offers/offers.component';
import { ArchitecturalDesignComponent } from './Module/our-services/architectural-design/architectural-design.component';
import { ConstructionConsultantComponent } from './Module/our-services/construction-consultant/construction-consultant.component';
import { DesignAndConstructionComponent } from './Module/our-services/design-and-construction/design-and-construction.component';
import { GreenBuildingComponent } from './Module/our-services/green-building/green-building.component';
import { HouseRenovationComponent } from './Module/our-services/house-renovation/house-renovation.component';
import { ResconstructionServiceComponent } from './Module/our-services/resconstruction-service/resconstruction-service.component';
import { CommercialComponent } from './Module/portfolio/commercial/commercial.component';
import { EducationComponent } from './Module/portfolio/education/education.component';
import { IndustrialComponent } from './Module/portfolio/industrial/industrial.component';
import { ResidentialComponent } from './Module/portfolio/residential/residential.component';
import { FooterComponent } from './shared folder/footer/footer.component';
import { HeaderComponent } from './shared folder/header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutUsComponent},
  {path:'future',component:FutureWorkComponent},
  {path:'offers',component:OffersComponent},
  // {path:'services', loadChildren:()=>import('./Module/our-services/our-services.module').then(mod=>mod.OurServicesModule)},
  {path:'construction-consultant',component:ConstructionConsultantComponent},
  {path:'architectural-design',component:ArchitecturalDesignComponent},
  {path:'resconstructionservice',component:ResconstructionServiceComponent},
  {path:'architecturaldesign',component:ArchitecturalDesignComponent},
  {path:'greenbuilding',component:GreenBuildingComponent},
  {path:'houserenovation',component:HouseRenovationComponent},
  {path:"designconstruction",component:DesignAndConstructionComponent},
  {path:"commercial",component:CommercialComponent},
  {path:"education",component:EducationComponent},
  {path:"industrial", component:IndustrialComponent},
{path:"residential",component:ResidentialComponent},
{path:'pune',component:PuneComponent},
{path:'mumbai',component:MumbaiComponent},
{path:'mahindra',component:MahindraComponent},
{path:'',component:HomeComponent},
{
  path:'developers', loadChildren:()=>import('./developers/devlopers-info/devlopers-info.module').then(mod=>mod.DevlopersInfoModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
