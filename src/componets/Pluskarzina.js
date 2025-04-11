import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [plus, setPlus] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPlus(false)
        }, 2500)
    }, [plus])

    return <CartContext.Provider value={{ plus, setPlus }}>{children}</CartContext.Provider>
}