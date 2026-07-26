import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Ecosystem } from './pages/ecosystem/ecosystem';
import { Innovation } from './pages/innovation/innovation';
import { Investments } from './pages/investments/investments';
import { Insights } from './pages/insights/insights';
import { Contact } from './pages/contact/contact';
export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },

  {
    path: 'ecosystem',
    loadComponent: () =>
      import('./pages/ecosystem/ecosystem').then(m => m.Ecosystem)
  },

  {
    path: 'investments',
    loadComponent: () =>
      import('./pages/investments/investments').then(m => m.Investments)
  },

  {
    path: 'innovation',
    loadComponent: () =>
      import('./pages/innovation/innovation').then(m => m.Innovation)
  },

  {
    path: 'insights',
    loadComponent: () =>
      import('./pages/insights/insights').then(m => m.Insights)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact)
  },
{
    path: 'insights/all',
    loadComponent: () =>
        import('./pages/insights/all-insights/all-insights')
        .then(m => m.AllInsights)
}, 
{
    path: 'insights/category/:category',
    loadComponent: () =>
        import('./pages/insights/category-insights/category-insights')
        .then(m => m.CategoryInsights)
},
  {
    path: '**',
    redirectTo: ''
  }
];
