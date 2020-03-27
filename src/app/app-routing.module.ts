import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launches',
    pathMatch: 'full'
  },
  {
    path: 'launches',
    loadChildren: () => import('./pages/launches/launches.module').then(m => m.LaunchesPageModule)
  },
  {
    path: 'missions',
    loadChildren: () => import('./pages/missions/missions.module').then(m => m.MissionsPageModule)
  },
  {
    path: 'rockets',
    loadChildren: () => import('./pages/rockets/rockets.module').then(m => m.RocketsPageModule)
  },
  {
    path: 'pads',
    loadChildren: () => import('./pages/pads/pads.module').then(m => m.PadsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
