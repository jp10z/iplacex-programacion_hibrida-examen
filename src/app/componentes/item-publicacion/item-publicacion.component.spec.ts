import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemPublicacionComponent } from './item-publicacion.component';

describe('ItemPublicacionComponent', () => {
  let component: ItemPublicacionComponent;
  let fixture: ComponentFixture<ItemPublicacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemPublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
