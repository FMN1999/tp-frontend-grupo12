import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiporopaComponent } from './tiporopa.component';

describe('TiporopaComponent', () => {
  let component: TiporopaComponent;
  let fixture: ComponentFixture<TiporopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiporopaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiporopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
