import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RouterState} from './services/routes/RouterState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router: Router) {
  }

  public async onOpenRegistration(): Promise<void> {
    await this._router.navigateByUrl(RouterState.registration);
  }

  public async onOpenLogin(): Promise<void> {
    await this._router.navigateByUrl(RouterState.login);
  }

}
