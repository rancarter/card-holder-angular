import { Component, Output, EventEmitter } from '@angular/core';

interface Errors {
  name?: string;
  number?: string;
}
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  name: string = '';
  number: string = '';
  errors: Errors = {};
  @Output() formSubmit = new EventEmitter<{ name: string; number: string }>();

  validate(): boolean {
    this.errors.name = this.name.length ? undefined : 'Required';
    this.errors.number = this.number.length ? undefined : 'Required';

    return Boolean(!this.errors.name && !this.errors.number);
  }

  clearError(fieldName: keyof Errors): void {
    this.errors[fieldName] = undefined;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    this.formSubmit.emit({ name: this.name, number: this.number });

    this.name = '';
    this.number = '';
  }
}
