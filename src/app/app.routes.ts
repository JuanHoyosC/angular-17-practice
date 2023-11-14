import { Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { ViewTransitionsComponent } from './components/view-transitions/view-transitions.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signals',
    },
    {
        path: 'signals',
        component: SignalsComponent
    },
    {
        path: 'deferrable',
        component: DeferrableViewsComponent
    },
    {
        path: 'view-transition',
        component: ViewTransitionsComponent
    }
];
