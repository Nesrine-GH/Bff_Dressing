import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetetComponent } from './add-detet.component';

describe('AddDetetComponent', () => {
  let component: AddDetetComponent;
  let fixture: ComponentFixture<AddDetetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
