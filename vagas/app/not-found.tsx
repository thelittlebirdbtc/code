import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div>
            <h1>Nada encontrado aqui!</h1>
            <img src="/astronaut.png" alt="Erro 404" />
            <p>Não foi possível encontrar a página solicitada.</p>
            <Button>Voltar à Home</Button>
        </div>
    )
}