import firebase from 'firebase/compat/app';
import auth from "../../firebase";
import { LOGIN_FAIL, LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes';


export const login = async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider();

        const res = await auth.signInWithPopup(provider);
        console.log(res)
        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.name,
            picture: res.additionalUserInfo.profile.picture
        }

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
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signOut(provider);
        console.log(res)

    } catch (error) {

    }
}