import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.dispatch(new GetConfig(null));
  }

}
