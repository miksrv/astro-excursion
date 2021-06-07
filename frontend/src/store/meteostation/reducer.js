import * as types from './actionTypes'

const initialState = {
    storeSummary: {},
    storeForecast: {},
    storeStatistic: {}
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_SUMMARY:
            return {
                ...state,
                storeSummary: action.payload
            }

        case types.GET_FORECAST:
            return {
                ...state,
                storeForecast: action.payload
            }

        case types.GET_STATISTIC:
            return {
                ...state,
                storeStatistic: action.payload
            }

        // case types.CLEAR_STAT_DATA:
        //     return {
        //         ...state,
        //         statistic: {}
        //     }

        default:
            return state
    }
}