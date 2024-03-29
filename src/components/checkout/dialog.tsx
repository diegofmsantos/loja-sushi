import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "../ui/progress"
import { useState } from "react"
import { StepUser } from "@/components/checkout/step-user"
import { StepAdress } from "@/components/checkout/step-adress"
import { StepFinish } from "@/components/checkout/step-finish"
import { CheckoutSteps } from "@/types/checkout-step"

type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {

    const [step, setStep] = useState<CheckoutSteps>('user')

    let progressPct = 0
    switch (step) {
        case 'user':
            progressPct = 33
            break
        case 'adress':
            progressPct = 66
            break
        case 'finish':
            progressPct = 100
            break
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-72 min-[375px]:w-[340px] min-[425px]:w-[400px] md:w-full">
                <DialogHeader>
                    <DialogTitle >
                        {step === 'user' && 'Dados pessoais'}
                        {step === 'adress' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para whatsapp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct} className="" />

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep} />}
                    {step === 'adress' && <StepAdress setStep={setStep} />}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}