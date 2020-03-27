import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesPage } from './launches.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchesPage,
    children: [
      {
        path: 'next',
        children: [
          {
            path: '',
            loadChildren: () => import('./next/next.module').then(m => m.NextPageModule)
          },
          {
            path: 'past',
            children: [
              {
                path: '',
                loadChildren: () => import('./past/past-routing.module').then(m => m.PastPageRoutingModule)
              }
            ]
          },
          {
            path: 'upcoming',
            children: [
              {
                path: '',
                loadChildren: () => import('./upcoming/upcoming.module').then(m => m.UpcomingPageModule)
              }
            ]
          },
        ]
      },
      {
        path: '',
        redirectTo: '/launches/next',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesPageRoutingModule { }
