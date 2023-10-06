import { useSelector } from "react-redux"
import { Fragment, useEffect,useRef } from "react"
import { DarkMode } from "../../context/DarkMode"
import { useContext } from "react"
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext."



const TableCart = (props) => {
    const {products} = props
    const cart = useSelector((state)=>state.cart.data)
    const {isDarkMode} = useContext(DarkMode)
    const {total} = useTotalPrice()
    const dispatch = useTotalPriceDispatch()

    useEffect(()=>{
        if (products.length>0 && cart.length>0){
            const sum = cart.reduce((acc,item)=>{
                const product = products.find((product)=>product.id===item.id)
                return Math.floor(acc+product.price*item.qty)                  
            },0)
            dispatch({
                type:"UPDATE",
                payload:{
                    total : sum
                }
            }) 
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    },[cart,products])

    const totalPriceRef=useRef(null)
    useEffect (()=>{
        if (cart.length > 0){
            totalPriceRef.current.style.display = "table-row"
        }
        else {
            totalPriceRef.current.style.display = "none"
        }
    },[cart])
    return (
        <Fragment className="fixed bottom-0">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Cart</h1>
            <table className={`text-left table-auto border-separate border-spacing-1 ${isDarkMode && "text-white "}`}>
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
            <td>$ {total.toLocaleString("id-ID",{styles:"currency",currency:"USD"})}</td>
            </tr>
            </tbody>
        </table>
      </Fragment>
    )
}

export default TableCart