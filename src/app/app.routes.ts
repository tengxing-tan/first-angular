import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UnboxComponent } from './unbox.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'unbox', component: UnboxComponent },
];
