import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectElementComponent } from './prodect-element.component';

describe('ProdectElementComponent', () => {
  let component: ProdectElementComponent;
  let fixture: ComponentFixture<ProdectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdectElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
