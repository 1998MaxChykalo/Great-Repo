import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignUpFormComponent } from "./signoff-form/signoff-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgDirective } from "./todo/ng.directive";
import { TodoModule } from "./todo/todo.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationComponent } from "./shared/components/navigation/navigation.component";
import { MaterialModule } from "./material/material.module";
@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    NgDirective,
    NavigationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
