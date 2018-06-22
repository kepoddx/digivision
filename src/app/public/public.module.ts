import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainComponent } from './main/main.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    UiModule
  ],
  declarations: [MainComponent]
})
export class PublicModule { }
