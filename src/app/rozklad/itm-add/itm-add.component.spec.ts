import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmAddComponent } from './itm-add.component';

describe('ItmAddComponent', () => {
  let component: ItmAddComponent;
  let fixture: ComponentFixture<ItmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
