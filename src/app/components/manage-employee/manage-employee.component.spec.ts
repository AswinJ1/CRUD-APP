import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeComponent } from './manage-employee.component';

describe('ManageEmployeeComponent', () => {
  let component: ManageEmployeeComponent;
  let fixture: ComponentFixture<ManageEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEmployeeComponent]
    });
    fixture = TestBed.createComponent(ManageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
