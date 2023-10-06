import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode"
import { useContext } from "react"
import 'remixicon/fonts/remixicon.css'

const AuthLayouts = (props)=>{
    const {children,title,type} = props
    const {isDarkMode,setIsDarkMode} = useContext(DarkMode)
    return (
      <div className={`flex justify-center min-h-screen items-center w-full ${isDarkMode && "bg-slate-900"}`}> 
      <div className="w-full max-w-xs">
      
        <button className="absolute font-semibold h-10 right-2 top-2 p-2 items-center text-white bg-slate-900 rounded-md" 
        onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode? <i class="ri-sun-line ri-lg"></i> : <i class="ri-moon-fill ri-lg"></i>}
        </button>
       
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">{title}</h1>
        <p className="text-slate-500 text-medium text-center mb-8">
          Welcome, Please enter your detail
          </p>
          {children}
        <p className="text-center text-slate-400 text-sm mt-2">
        {type === "login" ? "Don't have an account ?  ":"Already have an account ?  "}
        {type === "login" &&
        <Link to="/register" className="font-bold text-blue-600">
        Register
        </Link>}
        {type === "register" &&
        <Link to="/login" className="font-bold text-blue-600">
        Login
        </Link>}
        </p>
      </div>
     </div>
  
    )
}




    
  


export default AuthLayouts