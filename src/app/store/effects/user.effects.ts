import { UserService } from 'src/app/services/user.service';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.actions';
import { of } from 'rxjs';
import { IUserHttp } from 'src/app/models/http-models/user-http.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

}