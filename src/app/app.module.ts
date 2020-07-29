import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {RouterState} from './services/routes/RouterState';
import { AboutComponent } from './pages/about/about.component';


const Routes = [
  {
    path: RouterState.registration,
    component: RegistrationComponent,
  },
  {
    path: RouterState.login,
    component: LoginComponent,
  },
  {
    path: RouterState.about,
    component: AboutComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(Routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
