import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantosComponent } from './cantos.component';

describe('CantosComponent', () => {
  let component: CantosComponent;
  let fixture: ComponentFixture<CantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
