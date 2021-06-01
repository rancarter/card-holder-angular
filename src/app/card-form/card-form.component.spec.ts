import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './card-form.component';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should add a card and clear data", () => {
    component.name = "name";
    component.number = "number";

    component.onSubmit(new Event("submit"));

    expect(component.name).toBe("");
    expect(component.name).toBe("");
  });
});
