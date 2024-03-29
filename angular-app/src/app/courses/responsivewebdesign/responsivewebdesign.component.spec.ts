import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivewebdesignComponent } from './responsivewebdesign.component';

describe('ResponsivewebdesignComponent', () => {
  let component: ResponsivewebdesignComponent;
  let fixture: ComponentFixture<ResponsivewebdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsivewebdesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsivewebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
