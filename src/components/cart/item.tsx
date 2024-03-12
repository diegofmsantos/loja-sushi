import { Cart } from "@/types/cart"
import { CartItemQuantity } from "./item-quantity"

type Props = {
    item: Cart
}

export const CartItem = ({item}: Props) => {

    return (
        <div className="flex gap-5 items-center">
            <div className="w-16 overflow-hidden">
                <img src={item.product.image} alt="foto-sushi" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
                <p className="text-md">{item.product.name}</p>
                <p className="text-xs opacity-50">R$ {item.product.price.toFixed(2)}</p>
            </div>
            <div>
                <CartItemQuantity cartItem={item}/>
            </div>
        </div>
    )
}