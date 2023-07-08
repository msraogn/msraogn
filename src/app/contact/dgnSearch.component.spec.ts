import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgnSearchComponent } from './dgnSearch.component';

describe('DgnSearchComponent', () => {
  let component: DgnSearchComponent;
  let fixture: ComponentFixture<DgnSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgnSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
