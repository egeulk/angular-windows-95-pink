import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnyspiderComponent } from './funnyspider.component';

describe('FunnyspiderComponent', () => {
  let component: FunnyspiderComponent;
  let fixture: ComponentFixture<FunnyspiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnyspiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnyspiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
