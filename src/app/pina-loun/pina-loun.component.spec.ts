import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinaLounComponent } from './pina-loun.component';

describe('PinaLounComponent', () => {
  let component: PinaLounComponent;
  let fixture: ComponentFixture<PinaLounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinaLounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinaLounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
