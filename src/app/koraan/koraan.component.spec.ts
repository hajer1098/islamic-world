import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoraanComponent } from './koraan.component';

describe('KoraanComponent', () => {
  let component: KoraanComponent;
  let fixture: ComponentFixture<KoraanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoraanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
