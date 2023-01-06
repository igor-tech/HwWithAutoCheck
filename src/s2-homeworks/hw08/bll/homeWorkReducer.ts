import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            let sorted = stateCopy.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            if (action.payload === 'up') {
                stateCopy = sorted
            } else {
                stateCopy = sorted.reverse()
            }
            return stateCopy
        }

        case 'check':
            return state.filter(el => el.age > 18)
        default:
            return state
    }
}
