import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    NotFoundComponent,
  ],
})
export class SharedModule {}
