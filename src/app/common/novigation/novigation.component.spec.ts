import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovigationComponent } from './novigation.component';

describe('NovigationComponent', () => {
  let component: NovigationComponent;
  let fixture: ComponentFixture<NovigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
