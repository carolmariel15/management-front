import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopLevelingComponent } from './page-top-leveling/page-top-leveling.component';
import { FormTopLevelingComponent } from './form-top-leveling/form-top-leveling.component';
import { TopLevelingRoutingModule } from './top-leveling-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PageTopLevelingComponent,
    FormTopLevelingComponent
  ],
  imports: [
    CommonModule,
    TopLevelingRoutingModule,
    SharedModule
  ]
})
export class TopLevelingModule { }
