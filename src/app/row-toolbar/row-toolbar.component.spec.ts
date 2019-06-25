import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowToolbarComponent } from './row-toolbar.component';

describe('RowToolbarComponent', () => {
  let component: RowToolbarComponent;
  let fixture: ComponentFixture<RowToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
