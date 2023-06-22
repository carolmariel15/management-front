import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTopLevelingComponent } from './page-top-leveling/page-top-leveling.component';

const routes: Routes = [
  { path: 'top-leveling', component: PageTopLevelingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopLevelingRoutingModule { }
