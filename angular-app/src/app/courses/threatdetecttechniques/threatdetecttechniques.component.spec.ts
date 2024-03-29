import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatdetecttechniquesComponent } from './threatdetecttechniques.component';

describe('ThreatdetecttechniquesComponent', () => {
  let component: ThreatdetecttechniquesComponent;
  let fixture: ComponentFixture<ThreatdetecttechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatdetecttechniquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreatdetecttechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
