import firebase from 'firebase/compat/app';
import auth from "../../firebase";
import { LOGIN_FAIL, LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionTypes';


export const login = async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")

        const res = await auth.signInWithPopup(provider);
        // console.log(res)
        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.name,
            picture: res.additionalUserInfo.profile.picture
        }
        sessionStorage.setItem('yt-access-token', accessToken);
        sessionStorage.setItem('yt-profile', JSON.stringify(profile));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        });
        dispatch({
            type: LOGIN_PROFILE,
            payload: profile
        });


    } catch (error) {
        console.log('loi nay', error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}
export const logout = async dispatch => {
    await auth.signOut();
    dispatch({
        type: LOG_OUT,
    });

    sessionStorage.removeItem('yt-access-token');
    sessionStorage.removeItem('yt-profile');

}