import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdevicesComponent } from './moddevices.component';

describe('ModdevicesComponent', () => {
  let component: ModdevicesComponent;
  let fixture: ComponentFixture<ModdevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModdevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
