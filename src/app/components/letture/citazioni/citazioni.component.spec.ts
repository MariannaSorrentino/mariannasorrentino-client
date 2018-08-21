import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitazioniComponent } from './citazioni.component';

describe('CitazioniComponent', () => {
  let component: CitazioniComponent;
  let fixture: ComponentFixture<CitazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
