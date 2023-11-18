import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetalComponent } from './news-detal.component';

describe('NewsDetalComponent', () => {
  let component: NewsDetalComponent;
  let fixture: ComponentFixture<NewsDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
