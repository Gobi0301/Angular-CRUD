import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentDeleteComponent } from './appoinment-delete.component';

describe('AppoinmentDeleteComponent', () => {
  let component: AppoinmentDeleteComponent;
  let fixture: ComponentFixture<AppoinmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
