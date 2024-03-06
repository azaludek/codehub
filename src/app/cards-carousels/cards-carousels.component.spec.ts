import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarouselsComponent } from './cards-carousels.component';

describe('CardsCarouselsComponent', () => {
  let component: CardsCarouselsComponent;
  let fixture: ComponentFixture<CardsCarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCarouselsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
