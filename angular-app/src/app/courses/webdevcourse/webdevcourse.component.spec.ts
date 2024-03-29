import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevcourseComponent } from './webdevcourse.component';

describe('WebdevcourseComponent', () => {
  let component: WebdevcourseComponent;
  let fixture: ComponentFixture<WebdevcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebdevcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebdevcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
