import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCantoComponent } from './add-canto.component';

describe('AddCantoComponent', () => {
  let component: AddCantoComponent;
  let fixture: ComponentFixture<AddCantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCantoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
