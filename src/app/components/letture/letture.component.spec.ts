import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettureComponent } from './letture.component';

describe('LettureComponent', () => {
  let component: LettureComponent;
  let fixture: ComponentFixture<LettureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
