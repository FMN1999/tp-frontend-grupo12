import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosropasComponent } from './preciosropas.component';

describe('PreciosropasComponent', () => {
  let component: PreciosropasComponent;
  let fixture: ComponentFixture<PreciosropasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosropasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciosropasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
