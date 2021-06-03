import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './card-form.component';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    spyOn(component.formSubmit, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true and clear errors', () => {
    component.errors = { name: 'Required', number: 'Required' };
    component.name = 'name';
    component.number = 'number';

    expect(component.validate()).toBeTrue();
    expect(component.errors.name).toBeUndefined();
    expect(component.errors.number).toBeUndefined();
  });

  it('should return false and set errors', () => {
    component.name = '';
    component.number = 'number';

    expect(component.validate()).toBeFalse();
    expect(component.errors.name).toBe('Required');
    expect(component.errors.number).toBeUndefined();

    component.name = 'name';
    component.number = '';

    expect(component.validate()).toBeFalse();
    expect(component.errors.name).toBeUndefined();
    expect(component.errors.number).toBe('Required');
  });

  it('should emit formSubmit event and clear data', () => {
    component.name = 'name';
    component.number = 'number';

    component.onSubmit(new Event('submit'));

    expect(component.formSubmit.emit).toHaveBeenCalledWith({ name: 'name', number: 'number' });
    expect(component.name).toBe('');
    expect(component.number).toBe('');
  });

  it('should not emit formSubmit and clear data if validation fails', () => {
    component.name = 'name';

    component.onSubmit(new Event('submit'));

    expect(component.formSubmit.emit).not.toHaveBeenCalled();
    expect(component.name).toBe('name');
  });
});
