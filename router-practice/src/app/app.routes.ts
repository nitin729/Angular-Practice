import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { GithubComponent } from './github/github.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'github',
    loadComponent: () =>
      import('./github/github.component').then((m) => m.GithubComponent),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
