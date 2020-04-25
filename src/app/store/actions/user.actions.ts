import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models/user.interface';

export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
    public readonly type: string = EUserActions.GetUsers;
    constructor(public payload: any) { }
}

export class GetUsersSuccess implements Action {
    public readonly type: string = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]) { }
}

export class GetUser implements Action {
    public readonly type: string = EUserActions.GetUser;
    constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
    public readonly type: string = EUserActions.GetUserSuccess;
    constructor(public payload: IUser) { }
}

export type UserActions =
    | GetUsers
    | GetUsersSuccess
    | GetUser
    | GetUserSuccess;