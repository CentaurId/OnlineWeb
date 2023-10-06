import { forwardRef } from "react";

const Input = forwardRef((props,ref)=>{

    const { type,placeholder,name } =props
    return(
        <input type={type} 
        className="text-xs border rounded w-full px-2 py-3 placeholder: opacity-50" 
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
        />
    )
})
export default Input;