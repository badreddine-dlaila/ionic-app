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
          }
        ],
      },
      {
        path: 'past',
        children: [
          {
            path: '',
            loadChildren: () => import('./past/past.module').then(m => m.PastPageModule)
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
      {
        path: ':flightNumber',
        children: [
          {
            path: '',
            loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
          }
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
