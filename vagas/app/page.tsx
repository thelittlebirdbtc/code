import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-center items-center flex flex-col justify-center gap-4 mt-8">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">Diga adeus às longas buscas para uma vaga.</h1>
      <Image src="/people.png" alt="astronauta" width={500} height={500} />
      <Link className={cn("mt-12 cursor-pointer", buttonVariants({ variant: 'outline' }))} href="/vagas">Busque uma Vaga</Link>
    </section>
  );
} 