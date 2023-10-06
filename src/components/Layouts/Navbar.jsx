
import {useLogin} from "../../hook/useLogin"
import { useSelector } from "react-redux"
import { useEffect, useState,useContext  } from "react"
import { DarkMode } from "../../context/DarkMode"
import { useTotalPrice } from "../../context/TotalPriceContext."
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        window.location.href="/login"
        localStorage.removeItem('cart')
    }
    const [totalCart,setTotalCart]=useState(0)
    const cart =useSelector((state)=>state.cart.data)
    const username=useLogin()
    const {isDarkMode,setIsDarkMode} = useContext(DarkMode)
    const {total} = useTotalPrice()

    useEffect(()=>{
        const sum = cart.reduce((acc,item)=>{
            return acc+item.qty
        },0);
        setTotalCart(sum)
    })
    return (
   <>
       
        <div className="flex justify-end bg-blue-500 h-10 gap-2 px-10 items-center py-8">
            <h1 className="absolute font-semibold h-10 left-2 px-10 py-2 text-xl">Clone Shop</h1>
            {username}
            <div className="ri-shopping-cart-line ri-lg">
                {totalCart}
            </div>
            <div className="ri-wallet-2-line ri-lg">
                ${total}
            </div>
            <button onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode? <i class="ri-sun-line ri-lg"></i> : <i class="ri-moon-fill ri-lg"></i>}</button>
            <button onClick={handleLogout} className="ri-logout-box-r-line ri-lg"></button>    
            </div>
   </>
        
    )
}

export default Navbar