import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FormsService {
  setTouched(form: FormGroup | FormArray): void {
    Object.keys(form.controls).forEach(controlName => {
      const control = form.controls[controlName];
      control.markAsDirty();
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray)
        this.setTouched(control);
    });
  }

  public isFormValid(form: FormGroup | FormArray): boolean {
    if (!form.valid) {
      this.setTouched(form);
      return false;
    }
    return true;
  }
}
