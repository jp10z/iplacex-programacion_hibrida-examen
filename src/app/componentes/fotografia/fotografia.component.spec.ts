import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FotografiaComponent } from './fotografia.component';

describe('FotografiaComponent', () => {
  let component: FotografiaComponent;
  let fixture: ComponentFixture<FotografiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FotografiaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
