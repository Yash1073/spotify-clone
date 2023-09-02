export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // remove after finishing  development
    // token: "BQBrQPTdKP-Ud7icu0kt4p3YuWeBvH7iw1NmsJTDLmwHrcOdgU1OyjcHPz7ggSMyXz-rX7nu4uw5N9BYrpQZOVs0jvbQ93AziF6lnk9bbNH2C86ZuCLHyl2awU4ZC9X7Y3ws9lF3q0GptaSVIYtdaAIOqs9b739zHP9ePIyZTGXv4oH1TrbCJJD27VE4XAms-LJN0WrBcxSM32lt",
};

const reducer = (state, action) => {
    //debug
    console.log(action);

    //action-> type and [payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }

}
export default reducer;