import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousePointComponent } from './mouse-point.component';

describe('MousePointComponent', () => {
  let component: MousePointComponent;
  let fixture: ComponentFixture<MousePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousePointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MousePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
