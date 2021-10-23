import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import './_Login.scss';
import { FaYoutube } from 'react-icons/fa'
const Login = () => {
    const accessToken = useSelector(state => state.auth.accessToken)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogin = ()=>{
        dispatch(login)
    }
    useEffect(() => {
        if(accessToken){
            history.push('/')
        }
    }, [accessToken,history])
    return (
        <div className="login">
            <div className="login__container">
                <h4>YOUTUBE CLONE</h4>
                <span>
                    <FaYoutube size={100} className="icon-logo"/>
                </span>
                <button onClick={() => handleLogin()}>Login with Google</button>
                <p>this project clone Youtube with rest api</p>
            </div>

        </div>
    )
}

export default Login
