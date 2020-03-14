import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comparator',
    pathMatch: 'full'
  },
  {
    path: 'comparator',
    loadChildren: () => import('./modules/comparator/comparator.module').then(m => m.ComparatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
