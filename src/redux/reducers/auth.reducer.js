const initialState = {
    accessToken: sessionStorage.getItem('yt-access-token') ? sessionStorage.getItem('yt-access-token') : null,
    user: sessionStorage.getItem('yt-profile') ? JSON.parse(sessionStorage.getItem('yt-profile')) : null,
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
        case "LOG_OUT":
            return {
                ...prevState,
                accessToken: null,
                user: null,

            }
        default:
            return prevState

    }
}