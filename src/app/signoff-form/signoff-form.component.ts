import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { isRequired } from '../validators/isRequired';

export enum QuestionTypes {
  pet, teacher, custom
}

const questions = [
  {
    type: QuestionTypes.pet,
    name: 'Your pet name?'
  },
  {
    type: QuestionTypes.teacher,
    name: 'Your teachers name at pre-school?'
  },
  {
    type: QuestionTypes.custom,
    name: 'Your custom question'
  },
];

@Component({
  selector: 'app-signoff-form',
  templateUrl: './signoff-form.component.html',
  styleUrls: ['./signoff-form.component.css']
})
export class SignoffFormComponent implements OnInit {
  private questions = questions;
  constructor(private fb: FormBuilder) { }

  signoffForm = this.fb.group({
    userData: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }),
    secretQuestion: ['', Validators.required],
    customQuestion: [''],
    answer: ['', Validators.required],
    gender: ['', Validators.required]
  });
  isRequired = isRequired(this.signoffForm);


  ngOnInit() {
    this.signoffForm.get('secretQuestion').valueChanges.subscribe(
      questionType => {
        console.log(+questionType === +QuestionTypes.custom);
        const validators = +questionType === +QuestionTypes.custom ? [Validators.required] : [];
        this.signoffForm.get('customQuestion').setValidators(validators);
        this.signoffForm.get('customQuestion').updateValueAndValidity();
      }
    );
  }
  submitForm($event) {
    console.log($event);
  }
  get isSecretQuestionIsCustom() {
    return +this.signoffForm.get('secretQuestion').value === QuestionTypes.custom;
  }
}
