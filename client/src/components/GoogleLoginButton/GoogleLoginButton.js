import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { AUTH } from '../../constants/actionTypes'




const GoogleLoginButton = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const googleSuccess = (res) => {
        const result  = res?.profileObj;
        const token = res?.tokenId;
        
        try{
            dispatch({type: AUTH, data: {result, token}})
            history.push('/')
        }
         catch(error){
            console.log(error)
         }
    }
    const googleFailure = () => {console.log("hey")}
    return (
        <div>
            <GoogleLogin 
                    clientId="2513115520-5b73i7of2esdv4ajk5le8l6979b34nu3.apps.googleusercontent.com"
                    render={(renderProps)=>(
                      <button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">Google Sign In</button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default GoogleLoginButton

