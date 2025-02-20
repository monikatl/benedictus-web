import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSetComponent } from './add-set.component';

describe('AddSetComponent', () => {
  let component: AddSetComponent;
  let fixture: ComponentFixture<AddSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
