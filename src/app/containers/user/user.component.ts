import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from 'src/app/store/actions/user.actions';
import { selectSelectedUser } from '../../store/selectors/user.selectors'

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
