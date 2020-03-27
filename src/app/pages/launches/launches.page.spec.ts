import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaunchesPage } from './launches.page';

describe('LaunchesPage', () => {
  let component: LaunchesPage;
  let fixture: ComponentFixture<LaunchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
