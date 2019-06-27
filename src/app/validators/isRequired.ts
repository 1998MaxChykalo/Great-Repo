import {FormGroup} from '@angular/forms';

export const isRequired = (form: FormGroup) =>
  (control: string) =>
    form.get(control).invalid && form.get(control).touched;
