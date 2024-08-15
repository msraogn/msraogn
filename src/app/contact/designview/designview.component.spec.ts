import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignviewComponent } from './designview.component';

describe('DesignviewComponent', () => {
  let component: DesignviewComponent;
  let fixture: ComponentFixture<DesignviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
