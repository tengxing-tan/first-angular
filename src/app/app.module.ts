import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UnboxComponent } from './unbox.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        UnboxComponent,
        AppComponent
    ],
    providers: [],
    // Removed bootstrap array as AppComponent is standalone
})
export class AppModule { }