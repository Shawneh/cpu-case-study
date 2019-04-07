import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledComputersComponent } from './installed-computers.component';

describe('InstalledComputersComponent', () => {
  let component: InstalledComputersComponent;
  let fixture: ComponentFixture<InstalledComputersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalledComputersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalledComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
