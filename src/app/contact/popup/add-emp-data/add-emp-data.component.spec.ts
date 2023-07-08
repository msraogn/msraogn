import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDataComponent } from './add-emp-data.component';

describe('AddEmpDataComponent', () => {
  let component: AddEmpDataComponent;
  let fixture: ComponentFixture<AddEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
