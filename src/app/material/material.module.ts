import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, CommonModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MaterialModule { }
