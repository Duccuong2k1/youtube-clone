const initialState = {
    accessToken: null,
    user: null,
    loading: false,

}

export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_REQUEST":
            return {
                ...prevState,
                loading: true,
            }
        case "LOGIN_SUCCESS":
            return {
                ...prevState,
                accessToken: payload,
                loading: true,
            }
        case "LOGIN_FAIL":
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload,
            }
        case "LOGIN_PROFILE":
            return {
                ...prevState,
                user: payload,

            }
        default:
            return prevState

    }
}