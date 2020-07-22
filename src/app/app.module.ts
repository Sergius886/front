import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {RouterModule} from '@angular/router';

const Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
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
