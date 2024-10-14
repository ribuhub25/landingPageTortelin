import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaDetailComponent } from './torta-detail.component';

describe('TortaDetailComponent', () => {
  let component: TortaDetailComponent;
  let fixture: ComponentFixture<TortaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
