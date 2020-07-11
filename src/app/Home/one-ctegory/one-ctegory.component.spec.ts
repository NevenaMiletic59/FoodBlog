import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCtegoryComponent } from './one-ctegory.component';

describe('OneCtegoryComponent', () => {
  let component: OneCtegoryComponent;
  let fixture: ComponentFixture<OneCtegoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCtegoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCtegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
