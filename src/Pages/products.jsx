
// import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
// import Counter from "../components/Fragments/counter"
import { useEffect, useState } from "react"
import {getProducts} from "../services/product.service"
// import { data } from "autoprefixer"
// import { useLogin } from "../hook/useLogin"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"
import { DarkMode } from "../context/DarkMode"
import { useContext } from "react"


const ProductsPage =()=>{
    // const [cart,setCart] = useState([])
    // const [totalPrice,setTotalPrice] = useState(0)
    const [products,setProducts]=useState([])
    const {isDarkMode,setIsDarkMode} = useContext(DarkMode)
    // const username = useLogin()
    // useEffect(()=>{
    //     setCart(JSON.parse(localStorage.getItem('cart'))||[])
    // },[])
  
    
    useEffect(()=>{
        getProducts((data)=>{
            console.log(data)
        });
    },[])

    useState(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    })
    
    // const handleToAddCart =(id)=>{
    //    if (cart.find((item)=>item.id===id)){
    //        setCart(
    //         cart.map((item)=>
    //         item.id===id ? { ...item,qty :item.qty+1}:item
    //         )
    //        );
    //    }
    //    else{
    //     setCart([...cart,{id:id,qty:1}])
    // }
    // }

//    const cartRef = useRef(JSON.parse(localStorage.getItem('cart'))||[])

//    const handleToAddCartRef = (id)=>{
//     cartRef.current = [...cartRef.current,{id,qty:1}]
//     localStorage.setItem('cart',JSON.stringify(cartRef.current))
   
    // const totalPriceRef = useRef(null);
   
    // useEffect(()=>{
    //     if (cart.length > 0 ){
    //         totalPriceRef.curent.style.display = "table-row"
    //     }
    //     else {
    //         totalPriceRef.curent.style.display = "none"
    //     }
    // },[cart])
    
    return (
       <>
        <Navbar />
        <div className={`justify-center flex py-5 gap-2 px-1 ${isDarkMode && "bg-slate-900"}`}>
            <div className="flex flex-wrap gap-2 w-3/4 ">
            {products.length>0 && products.map ((product)=>(
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} 
                    // handleToAddCart={handleToAddCart}
                    id={product.id}/> 
                </CardProduct>
            ))}
            </div>
            <div className="w-1/4">
            
              {/* <h1 className="text-blue-600 font-bold text-3xl ">Cart</h1> */}
              <TableCart products={products}/>
              {/* <table className="text-left table-auto border-separate border-spacing-1">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                   {products.length>0 && cart.map((item)=>{
                    const product = products.find((product)=>product.id===item.id)
                       return (
                       <tr key={item.id}>
                           <td>{product.title}</td>
                           <td>$ {product.price.toLocaleString("id-ID",{styles:"currency",currency:"IDR"})}</td>
                           <td>{item.qty}</td>
                           <td>$ {(item.qty*product.price).toLocaleString("id-ID",{styles:"currency",currency:"USD"})}</td>
                       </tr>)
                   })}
                <tr className="font-bold" ref={totalPriceRef}>
                   <td colSpan={3}>Total Price</td>
                   <td>$ {totalPrice.toLocaleString("id-ID",{styles:"currency",currency:"USD"})}</td>
                </tr>
                </tbody>
              </table> */}
            
            </div>
        </div>
        {/* <div className="flex justify-center w-100">
            <Counter />
        </div> */}
        </>
    )
    }

export default ProductsPage