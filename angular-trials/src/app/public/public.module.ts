import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { PublicService } from './public.service';

@NgModule({
  declarations: [PublicComponent, HomeComponent, LoginComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
  exports: [],
  providers: [PublicService],
})
export class PublicModule {
  constructor() {}
}
