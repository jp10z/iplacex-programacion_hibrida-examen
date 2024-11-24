import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalEliminarPublicacionComponent } from './modal-eliminar-publicacion.component';

describe('ModalEliminarPublicacionComponent', () => {
  let component: ModalEliminarPublicacionComponent;
  let fixture: ComponentFixture<ModalEliminarPublicacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalEliminarPublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEliminarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
