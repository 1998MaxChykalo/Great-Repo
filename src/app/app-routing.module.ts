import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpFormComponent } from "./signoff-form/signoff-form.component";
import { TodoComponent } from "./todo/components/todo/todo.component";

const routes: Routes = [
  {
    pathMatch: "full",
    path: "todos",
    component: TodoComponent,
    data: { state: "todos" }
  },
  {
    pathMatch: "full",
    path: "signup",
    component: SignUpFormComponent,
    data: { state: "signup" }
  },
  {
    path: "**",
    redirectTo: "signup",
    pathMatch: "full",
    data: { state: "signup" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
