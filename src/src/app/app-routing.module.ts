import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'profile-form', loadChildren: () => import('./profile-form/profile-form.module').then(m => m.ProfileFormModule) }, { path: 'done', loadChildren: () => import('./done/done.module').then(m => m.DoneModule) }, { path: '**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
