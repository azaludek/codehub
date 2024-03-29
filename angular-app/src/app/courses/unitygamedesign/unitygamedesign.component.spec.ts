import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitygamedesignComponent } from './unitygamedesign.component';

describe('UnitygamedesignComponent', () => {
  let component: UnitygamedesignComponent;
  let fixture: ComponentFixture<UnitygamedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitygamedesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitygamedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
