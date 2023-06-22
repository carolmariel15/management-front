import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBenchMarkComponent } from './page-bench-mark/page-bench-mark.component';

const routes: Routes = [
  { path: 'bench-mark', component: PageBenchMarkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchMarkRoutingModule { }
