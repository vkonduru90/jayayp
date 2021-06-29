import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavapiComponent } from './navapi.component';

describe('NavapiComponent', () => {
  let component: NavapiComponent;
  let fixture: ComponentFixture<NavapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
