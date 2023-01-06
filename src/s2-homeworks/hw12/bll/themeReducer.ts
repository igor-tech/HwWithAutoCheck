const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: actionTypes): typeof initState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

//action creators

export const changeThemeId = (id: number): {type: 'SET_THEME_ID', id: number} => ({ type: 'SET_THEME_ID', id } as const)

//types
type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>

type actionTypes = ChangeThemeIdActionType
