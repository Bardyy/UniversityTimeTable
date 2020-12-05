import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AUPComponent } from './aup.component';

describe('AUPComponent', () => {
  let component: AUPComponent;
  let fixture: ComponentFixture<AUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AUPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
