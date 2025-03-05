import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function NotFound() {
    return (
        <div>
            <Image src="/astronaut.png" alt="astrounauta" width={500} height={500} />
            <p>Não foi possível encontrar a página solicitada.</p>
            <Button>Voltar à Home</Button>
        </div>
    )
}