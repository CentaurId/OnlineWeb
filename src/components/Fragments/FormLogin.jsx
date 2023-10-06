import { login } from "../../services/auth.service"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { useEffect, useRef, useState } from "react"
const FormLogin = ()=>{
    const [loginFail,setLoginFail] = useState("")
    const handleLogin = (event)=>{
        
        event.preventDefault();
        // localStorage.setItem("email",event.target.email.value)
        // localStorage.setItem("password",event.target.password.value)
        // window.location.href="/product"
        const data = {
            username : event.target.username.value,
            password : event.target.password.value,
        }
        login(data,(status,res)=>{
            if (status ){
                localStorage.setItem("token",res)
                window.location.href="/product"
            }
            else {
                setLoginFail(res.response.data)
                console.log(res.response.data)
            }
        });
    }
    const usernameRef = useRef(null)
    useEffect(()=>{
        usernameRef.current.focus()
    })
    return(
        <form onSubmit={handleLogin} >
        <InputForm 
        label="Username" 
        type="text" 
        placeholder="Username" 
        name="username"
        ref={usernameRef}/>
        <InputForm 
        label="Password" 
        type="password" 
        placeholder="*******" 
        name="password"/>
    
        
       <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
        {loginFail && <p className="text-red-500 text-center mt-5">Incorect Username</p>}
      </form>
    )
}

export default FormLogin