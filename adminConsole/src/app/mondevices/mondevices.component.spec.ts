import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondevicesComponent } from './mondevices.component';

describe('MondevicesComponent', () => {
  let component: MondevicesComponent;
  let fixture: ComponentFixture<MondevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
