import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { selectUserList } from 'src/app/store/selectors/user.selectors';
import { GetUsers } from 'src/app/store/actions/user.actions';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers(null)); // Doesn't have a payload
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }

}
