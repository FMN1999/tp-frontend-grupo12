import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposropasComponent } from './tiposropas.component';

describe('TiposropasComponent', () => {
  let component: TiposropasComponent;
  let fixture: ComponentFixture<TiposropasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposropasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposropasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
