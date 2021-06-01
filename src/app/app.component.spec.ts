import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should add a card and clear data (integration)", () => {
    const element: HTMLElement = fixture.nativeElement;
    const nameInput =
      element.querySelector<HTMLInputElement>("input[name='name']");
    const numberInput = element.querySelector<HTMLInputElement>(
      "input[name='number']"
    );
    const button = element.querySelector<HTMLButtonElement>("button");

    if (!nameInput || !numberInput || !button) {
      throw new Error("Element not found");
    }

    nameInput.value = "card name";
    numberInput.value = "card number";

    nameInput.dispatchEvent(new Event("input"));
    numberInput.dispatchEvent(new Event("input"));

    button.click();
    button.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(element.querySelector<HTMLInputElement>("input[name='name']")!.value).toBe("");
    expect(numberInput!.value).toBe('');
  });
});
