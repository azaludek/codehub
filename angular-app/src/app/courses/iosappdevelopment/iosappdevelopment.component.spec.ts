import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosappdevelopmentComponent } from './iosappdevelopment.component';

describe('IosappdevelopmentComponent', () => {
  let component: IosappdevelopmentComponent;
  let fixture: ComponentFixture<IosappdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IosappdevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IosappdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
