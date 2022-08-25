import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComformComponent } from './comform.component';

describe('ComformComponent', () => {
  let component: ComformComponent;
  let fixture: ComponentFixture<ComformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
