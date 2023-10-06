import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = ()=>{
    return(
        <form action="" >
        <InputForm 
        label="FullName" 
        type="text" 
        placeholder="insert your name ...." 
        name="FullName"/>
        <InputForm 
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email"/>
        <InputForm 
        label="Password" 
        type="password" 
        placeholder="*******" 
        name="password"/>
        <InputForm 
        label="Confirm Password" 
        type="password" 
        placeholder="*******" 
        name="confirm"/>
       <Button classname="bg-blue-500 w-full">Register</Button>
    
      </form>
      
    )
}
export default FormRegister