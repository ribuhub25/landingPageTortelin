import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTortasCartComponent } from './list-tortas-cart.component';

describe('ListTortasCartComponent', () => {
  let component: ListTortasCartComponent;
  let fixture: ComponentFixture<ListTortasCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTortasCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTortasCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
