import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinebasicsComponent } from './machinebasics.component';

describe('MachinebasicsComponent', () => {
  let component: MachinebasicsComponent;
  let fixture: ComponentFixture<MachinebasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinebasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachinebasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
