import Button from "../Elements/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"
const CardProduct =(props)=>{
    const {children} = props
return (
   
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mt-2 
        flex flex-col justify-between">
            {children}
        </div>
)
}


const Header =(props)=>{
    const {image} = props
    return (
        <a href="#">
        <img 
        src={image}
        alt="image" 
        className="p-8 rounded-t-lg h-60 w-full " 
        />
    </a>

    )
}
const Body =(props)=>{
    const {name,children} = props
    return(
        <div className="px-5 pb-5 h-full">
        <a href="#">
        <h5 className="text-white font-semibold text-xl">{name.substring(0,20)}...</h5>
        <p className="text-m text-white">{children.substring(0,100)}...</p>
        </a>
    </div>

    )
}


const Footer =(props)=>{
    const {price,id} = props
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className="text-xl text-white font-bold">$ {price.toLocaleString("id-ID",{styles:"currency",currency:"USD"})}</span>
          
            <Button classname="bg-blue-600"  onClick={()=>dispatch(addToCart({id,qty:1}))}>Add to Chart</Button>
        </div>  
    )
}

CardProduct.Header =Header
CardProduct.Body = Body
CardProduct.Footer = Footer
export default CardProduct