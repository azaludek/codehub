import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonfundcourseComponent } from './pythonfundcourse.component';

describe('PythonfundcourseComponent', () => {
  let component: PythonfundcourseComponent;
  let fixture: ComponentFixture<PythonfundcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonfundcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythonfundcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
