import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecbasicsComponent } from './cybersecbasics.component';

describe('CybersecbasicsComponent', () => {
  let component: CybersecbasicsComponent;
  let fixture: ComponentFixture<CybersecbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecbasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CybersecbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
