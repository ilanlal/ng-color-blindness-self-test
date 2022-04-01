import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './examination.component';
import {MatListModule, MatSelectionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExaminationComponent],
  imports: [
    MatListModule,MatSelectModule,MatButtonModule,MatCardModule,
    CommonModule
  ],
  providers:[MatSelectionList]
})
export class ExaminationModule { }
