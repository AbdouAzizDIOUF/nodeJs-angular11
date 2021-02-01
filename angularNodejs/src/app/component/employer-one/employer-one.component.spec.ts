import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerOneComponent } from './employer-one.component';

describe('EmployerOneComponent', () => {
  let component: EmployerOneComponent;
  let fixture: ComponentFixture<EmployerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
