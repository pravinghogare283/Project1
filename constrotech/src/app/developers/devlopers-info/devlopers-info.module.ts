import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MahindraComponent } from '../mahindra/mahindra.component';

const route: Routes =[
 {path:'mahindra',component:MahindraComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  [RouterModule.forChild(route)]
  ]
})
export class DevlopersInfoModule { }
