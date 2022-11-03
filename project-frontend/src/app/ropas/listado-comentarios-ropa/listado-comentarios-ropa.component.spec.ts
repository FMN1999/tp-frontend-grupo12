import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComentariosRopaComponent } from './listado-comentarios-ropa.component';

describe('ListadoComentariosRopaComponent', () => {
  let component: ListadoComentariosRopaComponent;
  let fixture: ComponentFixture<ListadoComentariosRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComentariosRopaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoComentariosRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
