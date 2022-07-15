import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true)
    const [confirmPass, setConfirmPass] = useState(true)
    const [data, setData] = useState({firstname: "", lastname: "", username: "", password: "", confirmpass: ""})

    const resetForm = ()=>{
        setConfirmPass(true)
        setData = ({firstname: "", lastname: "", username: "", password: "", confirmpass: ""}) 
    }

    const handleChange = (e)=>{
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(isSignUp){
            data.password === data.confirmpass
            ? dispatch(signUp(data))
            : setConfirmPass(false)
        }else{
            dispatch(logIn(data))
        }
    }

  return (
    <div className="auth">

        <div className="a-left">
            <img src={Logo} alt="" />

            <div className="webName">
                <h1>Grammarplay</h1>
                <h6>More you Play, more you Learn</h6>
            </div>
        </div>

        <div className="a-right">

            <form className="infoForm authForm" onSubmit={handleSubmit}>
                
                <h3>{isSignUp? "Sign up" : "Login"}</h3>

                {isSignUp && (

                    <div>
                    <input type="text" className="infoInput" name='firstname' placeholder='First Name'
                    onChange={handleChange} value={data.firstname} />
                    <input type="text" className="infoInput" name='lastname' placeholder='Last Name'
                    onChange={handleChange} value={data.lastname} />
                    </div>

                )}


                <div>
                    <input type="text" className="infoInput" name='username' placeholder='Username'
                    onChange={handleChange} value={data.username}/>
                </div>


                <div>
                    <input type="password" className="infoInput" name='password' placeholder='Password'
                    onChange={handleChange} value={data.password} />

                    {isSignUp && (

                        <input type="password" className="infoInput" name='confirmpass' placeholder='Confirm Password'
                        onChange={handleChange} value={data.confirmpass} />

                    )}


                    
                </div>

                <span style={{display: confirmPass? 'none' : 'block', 
                              color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: '5px'}}>
                    *Confirm password is not the same.
                </span>

                <div>
                    <span style={{fontSize: '12px', cursor: 'pointer', textDecoration: 'underline', color:'blue'}} 
                          onClick={()=>{setIsSignUp((prev)=>!prev), resetForm()}}>

                        {isSignUp
                        ? "Already have an account. Login"
                        : "Don't have an account? Sign up"}

                    </span>
                </div>

                <button className="button infoButton" type='submit' disabled={loading}>
                    {loading? "Loading..." : isSignUp? "Sign up" : "Login"}
                </button>

            </form>
        </div>

    </div>
  )
}

export default Auth