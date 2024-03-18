import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSocialsComponent } from './profile-socials.component';

describe('ProfileSocialsComponent', () => {
  let component: ProfileSocialsComponent;
  let fixture: ComponentFixture<ProfileSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSocialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
