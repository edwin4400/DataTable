import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafilterComponent } from './datafilter.component';

describe('DatafilterComponent', () => {
  let component: DatafilterComponent;
  let fixture: ComponentFixture<DatafilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
