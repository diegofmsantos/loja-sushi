import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({ cartItem }: Props) => {

    const { upsertCartItem } = useCartStore(state => state)

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)
    }

    return (
        <div className="flex items-center gap-3">
            <Button onClick={handlePlusButton} variant="outline" size="icon" className="size-6"><PlusIcon /></Button>
            <div>{cartItem.quantity}</div>
            <Button onClick={handleMinusButton} variant="outline" size="icon" className="size-6"><MinusIcon /></Button>
        </div>
    )
}