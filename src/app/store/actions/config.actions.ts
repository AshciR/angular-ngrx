import { Action } from '@ngrx/store';
import { IConfig } from 'src/app/models/config.interface';

export enum EConfigActions {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
    public readonly type: string = EConfigActions.GetConfig;
    constructor(public payload: any) { }
}

export class GetConfigSuccess implements Action {
    public readonly type: string = EConfigActions.GetConfig;
    constructor(public payload: IConfig) { }
}

export type ConfigActions =
    | GetConfig
    | GetConfigSuccess