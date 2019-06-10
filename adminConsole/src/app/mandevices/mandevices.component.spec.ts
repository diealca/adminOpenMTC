import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandevicesComponent } from './mandevices.component';

describe('MandevicesComponent', () => {
  let component: MandevicesComponent;
  let fixture: ComponentFixture<MandevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
