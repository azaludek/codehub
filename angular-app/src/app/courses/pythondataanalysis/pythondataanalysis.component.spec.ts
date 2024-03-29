import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythondataanalysisComponent } from './pythondataanalysis.component';

describe('PythondataanalysisComponent', () => {
  let component: PythondataanalysisComponent;
  let fixture: ComponentFixture<PythondataanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythondataanalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythondataanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
