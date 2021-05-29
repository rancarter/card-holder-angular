import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
