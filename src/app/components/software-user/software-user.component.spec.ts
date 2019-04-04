import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUserComponent } from './software-user.component';

describe('SoftwareUserComponent', () => {
  let component: SoftwareUserComponent;
  let fixture: ComponentFixture<SoftwareUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
