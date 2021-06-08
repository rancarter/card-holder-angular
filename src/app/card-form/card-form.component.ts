import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Errors {
  name?: string;
  cardNumber?: string;
}
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  cardForm = this.fb.group({
    name: ['', Validators.required],
    cardNumber: ['', Validators.required],
  });
  isBecomeInvalid: boolean = false;

  @Output() formSubmit = new EventEmitter<{
    name: string;
    cardNumber: string;
  }>();

  constructor(private fb: FormBuilder) {
    this.cardForm.valueChanges.subscribe((form) => {
      if (this.cardForm.invalid) {
        if (!this.isBecomeInvalid) {
          console.log('Invalid form');
        }

        this.isBecomeInvalid = true;
      } else {
        this.isBecomeInvalid = false;
      }
    });
  }

  get formErrors(): Errors {
    const controls = this.cardForm.controls;
    const errors = Object.entries(controls)
      .filter(([name, control]) => control.touched && control.invalid)
      .map(([name]) => [name, 'Required'])
      .reduce((acc, [name, value]) => {
        return { ...acc, [name]: value };
      }, {});

    return errors;
  }

  onSubmit() {
    console.log(this.cardForm);
    if (this.cardForm.invalid) {
      return;
    }

    this.formSubmit.emit(this.cardForm.value);
    this.cardForm.reset();
  }
}
