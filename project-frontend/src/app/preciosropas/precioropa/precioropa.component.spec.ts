import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioropaComponent } from './precioropa.component';

describe('PrecioropaComponent', () => {
  let component: PrecioropaComponent;
  let fixture: ComponentFixture<PrecioropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecioropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
