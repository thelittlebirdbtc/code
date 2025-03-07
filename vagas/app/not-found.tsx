import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import astrounautImg from '@/public/astronaut.png';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center m-8 font-display">
            <h1 className="font-black text-4xl p-4">Nada Encontrado Aqui!</h1>
            <Image src={astrounautImg} alt="pessoas" className='w-lg' />
            <p className='mt-2 font-display font-light text-2xl text-gray-500'>Não foi possível encontrar nada nessa página</p>
            <Link className={cn('mt-6 mb-12 block', buttonVariants({ variant: 'default' }))} href="/">Voltar à Home</Link>        
        </main>
    )
}