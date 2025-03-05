import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="font-bold text-4xl p-4">Nada Encontrado Aqui!</h1>
            <Image src="/astronaut.png" alt="astrounauta" width={500} height={500}/>
            <p className="font-normal text-2xl text-gray-500">Não foi possível encontrar a página solicitada.</p>
            <Button className="mt-8 text-lg py-8 px-6">Voltar à Home</Button>
        </div>
    )
}