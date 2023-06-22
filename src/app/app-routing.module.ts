import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/bench-mark/bench-mark.module').then(m => m.BenchMarkModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/top-leveling/top-leveling.module').then(m => m.TopLevelingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
