import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrosusMagmaComponent } from './grosus-magma.component';

describe('GrosusMagmaComponent', () => {
  let component: GrosusMagmaComponent;
  let fixture: ComponentFixture<GrosusMagmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrosusMagmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrosusMagmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
