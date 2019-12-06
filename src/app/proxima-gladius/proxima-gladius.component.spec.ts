import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaGladiusComponent } from './proxima-gladius.component';

describe('ProximaGladiusComponent', () => {
  let component: ProximaGladiusComponent;
  let fixture: ComponentFixture<ProximaGladiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximaGladiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaGladiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
