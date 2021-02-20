import React from 'react'
import './css/login.css'
function Login() {
    const [user, setuser] = useState(null);
    const [username, setusername] = useState(null);
    const [pass, setpass] = useState(null);
    const clickHandler=()=>{
        if(username&&pass){
            // google login
            
        }

    }
    return (
        <div className='Login'>
            <input type='text' placeholder='username' onChange={(e)=>{setusername(e.target.value)}}/>
            <input type='password' placeholder='password'  onChange={(e)=>{setpass(e.target.value)}}/>
            <button onClick={clickHandler}>Login</button>
        </div>
    )
}

export default Login
