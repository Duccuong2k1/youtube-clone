import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import './_Login.scss';
const Login = () => {
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        dispatch(login)
    }
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
