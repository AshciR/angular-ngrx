import { IConfigState, initialConfigState } from '../state/config.state';
import { ConfigActions, EConfigActions } from '../actions/config.actions';

export const configReducers = (
    state: IConfigState = initialConfigState,
    action: ConfigActions
): IConfigState => {

    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }

        default:
            return state;
    }

};