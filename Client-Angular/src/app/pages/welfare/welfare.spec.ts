import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welfare } from './welfare';

describe('Welfare', () => {
  let component: Welfare;
  let fixture: ComponentFixture<Welfare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welfare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welfare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
