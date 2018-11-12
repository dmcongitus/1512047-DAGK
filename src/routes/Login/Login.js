
import React from "react"
import GoogleButton from 'react-google-button'



export const LoginPage = ({ googleLogin }) => (
    <GoogleButton onClick={googleLogin} />
)



export default LoginPage