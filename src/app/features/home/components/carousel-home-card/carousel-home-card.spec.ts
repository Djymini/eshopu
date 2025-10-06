import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHomeCard } from './carousel-home-card';

describe('CarouselHomeCard', () => {
  let component: CarouselHomeCard;
  let fixture: ComponentFixture<CarouselHomeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselHomeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHomeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
