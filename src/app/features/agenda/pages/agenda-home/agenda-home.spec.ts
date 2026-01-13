import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHome } from './agenda-home';

describe('AgendaHome', () => {
  let component: AgendaHome;
  let fixture: ComponentFixture<AgendaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
