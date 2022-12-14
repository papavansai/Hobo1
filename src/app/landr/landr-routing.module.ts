import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent} from '../dashboard/dash/dash.component';

const routes: Routes = [
  {
    path:'dash', component: DashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandrRoutingModule { }
