import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generate-message"


export const StepFinish = () => {

    const { name } = useCheckoutStore(state => state)

    const message = generateMessage()
    const LinkWhats = `https://wa.me//${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito, <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso Whatsapp para concluir.
                Nosso antendente irá te guiar sobre o andamento do pedido.
            </p>
            <Button>
                <Link target="_blank" href={LinkWhats}>Enviar para o Whatsapp</Link>
            </Button>
        </div>
    )
}