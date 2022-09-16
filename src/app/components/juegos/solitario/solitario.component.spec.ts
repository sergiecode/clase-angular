import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitarioComponent } from './solitario.component';

describe('SolitarioComponent', () => {
  let component: SolitarioComponent;
  let fixture: ComponentFixture<SolitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
