import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatLabel,
  MatSelectModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule
} from "@angular/material";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule {}
