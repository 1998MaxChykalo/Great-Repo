import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { isRequired } from "../validators/isRequired";
import { LoggerService } from "../shared/services/logger.service";
import { FormsService } from "../shared/services/forms.service";

export enum QuestionTypes {
  pet,
  teacher,
  custom
}

const questions = [
  {
    type: QuestionTypes.pet,
    name: "Your pet name?"
  },
  {
    type: QuestionTypes.teacher,
    name: "Your teachers name at pre-school?"
  },
  {
    type: QuestionTypes.custom,
    name: "Your custom question"
  }
];

@Component({
  templateUrl: "./signoff-form.component.html",
  styleUrls: ["./signoff-form.component.css"]
})
export class SignUpFormComponent implements OnInit {
  private questions = questions;
  constructor(
    private fb: FormBuilder,
    private logger: LoggerService,
    private formsService: FormsService
  ) {}

  signUpForm = this.fb.group({
    userData: this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    }),
    secretQuestion: ["", Validators.required],
    customQuestion: [""],
    answer: ["", Validators.required],
    gender: ["", Validators.required]
  });
  isRequired = isRequired(this.signUpForm);

  ngOnInit() {
    this.signUpForm
      .get("secretQuestion")
      .valueChanges.subscribe(questionType => {
        const validators =
          +questionType === +QuestionTypes.custom ? [Validators.required] : [];
        this.signUpForm.get("customQuestion").setValidators(validators);
        this.signUpForm.get("customQuestion").updateValueAndValidity();
      });
  }
  submitForm() {
    if (this.formsService.isFormValid(this.signUpForm)) {
      this.logger.logInfo(this.signUpForm.value);
      this.signUpForm.reset();
    }
    return false;
  }
  get isSecretQuestionIsCustom() {
    return (
      +this.signUpForm.get("secretQuestion").value === QuestionTypes.custom
    );
  }
}
