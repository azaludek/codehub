import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataintroComponent } from './dataintro.component';

describe('DataintroComponent', () => {
  let component: DataintroComponent;
  let fixture: ComponentFixture<DataintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataintroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
