import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBenchMarkComponent } from './page-bench-mark/page-bench-mark.component';
import { FormBenchMarkComponent } from './form-bench-mark/form-bench-mark.component';
import { BenchMarkRoutingModule } from './bench-mark-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PageBenchMarkComponent,
    FormBenchMarkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BenchMarkRoutingModule
  ]
})
export class BenchMarkModule { }
