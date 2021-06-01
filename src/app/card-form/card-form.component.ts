import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent {
  name: string = "";
  number: string = "";
  @Output() formSubmit = new EventEmitter();

  onSubmit(event: Event) {
    event.preventDefault();

    this.formSubmit.emit({ name: this.name, number: this.number });

    this.name = "";
    this.number = "";
  }
}
