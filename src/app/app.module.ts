import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignoffFormComponent } from './signoff-form/signoff-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgDirective } from './todo/ng.directive';
import {TodoModule} from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    SignoffFormComponent,
    NgDirective
  ],
  imports: [
    BrowserAnimationsModule,
    // MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
