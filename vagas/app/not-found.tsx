import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center h-screen space-y-4 font-display">
            <h1 className="font-black text-4xl p-4">Nada Encontrado Aqui!</h1>
            <Image src="/astronaut.png" alt="astrounauta" width={500} height={500}/>
            <Link className={cn('mt-10 block', buttonVariants({ variant: 'default' }))} href="/">Voltar à Home</Link>
        </main>
    )
}