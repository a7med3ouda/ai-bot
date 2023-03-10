import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotIconComponent } from './bot-icon.component';

describe('BotIconComponent', () => {
  let component: BotIconComponent;
  let fixture: ComponentFixture<BotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
