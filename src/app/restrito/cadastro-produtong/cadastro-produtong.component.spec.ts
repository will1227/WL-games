import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutongComponent } from './cadastro-produtong.component';

describe('CadastroProdutongComponent', () => {
  let component: CadastroProdutongComponent;
  let fixture: ComponentFixture<CadastroProdutongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProdutongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroProdutongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
