import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidappfundamentalsComponent } from './androidappfundamentals.component';

describe('AndroidappfundamentalsComponent', () => {
  let component: AndroidappfundamentalsComponent;
  let fixture: ComponentFixture<AndroidappfundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidappfundamentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndroidappfundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
