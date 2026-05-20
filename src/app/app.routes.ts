import { Routes } from '@angular/router';
import { Vitrine } from '../app/pages/vitrine/vitrine';
import { ProdutoDetalhe } from '../app/pages/produto-detalhe/produto-detalhe';
import { Carrinho } from '../app/pages/carrinho/carrinho';
import { NaoEncontrada } from '../app/pages/nao-encontrada/nao-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: 'vitrine', pathMatch: 'full' },
  { path: 'vitrine', component: Vitrine },
  { path: 'carrinho', component: Carrinho },
  { path: 'produto-detalhe/:id', component: ProdutoDetalhe },
  { path: '**', component: NaoEncontrada }
];