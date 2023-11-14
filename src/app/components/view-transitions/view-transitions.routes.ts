import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ImageListComponent } from './image-list/image-list.component';

export const viewTransitionsRoutes: Routes = [
    {

        path: 'images',
        component: ImageListComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'images'
    }
];
