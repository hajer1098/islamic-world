import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesallahComponent } from './namesallah.component';

describe('NamesallahComponent', () => {
  let component: NamesallahComponent;
  let fixture: ComponentFixture<NamesallahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesallahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesallahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
