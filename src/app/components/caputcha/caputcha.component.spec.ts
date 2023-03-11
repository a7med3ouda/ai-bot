import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaputchaComponent } from './caputcha.component';

describe('CaputchaComponent', () => {
  let component: CaputchaComponent;
  let fixture: ComponentFixture<CaputchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaputchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaputchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
