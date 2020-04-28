import { ConfigService } from 'src/app/services/config.service';
import { Actions, ofType } from '@ngrx/effects';
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.actions';
import { switchMap } from 'rxjs/operators';
import { IConfig } from 'src/app/models/config.interface';
import { of } from 'rxjs';

export class ConfigEffects {

    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
    );

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ) { }
}