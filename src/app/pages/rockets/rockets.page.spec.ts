import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocketsPage } from './rockets.page';

describe('RocketsPage', () => {
  let component: RocketsPage;
  let fixture: ComponentFixture<RocketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
