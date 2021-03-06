import { IUserState, initialUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';


export const userReducers = (
    state: IUserState = initialUserState,
    action: UserActions
): IUserState => {

    switch (action.type) {
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }
        default:
            return state
    }
}