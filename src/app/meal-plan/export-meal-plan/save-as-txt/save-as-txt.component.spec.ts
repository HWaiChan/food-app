import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAsTxtComponent } from './save-as-txt.component';

describe('SaveAsTxtComponent', () => {
  let component: SaveAsTxtComponent;
  let fixture: ComponentFixture<SaveAsTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAsTxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAsTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
