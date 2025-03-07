import Image from 'next/image';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <section className="text-center items-center flex flex-col justify-center gap-4 mt-8">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">Diga adeus às longas buscas para uma vaga.</h1>
      <Image src="/people.png" alt="astronauta" width={500} height={500} />
      <Button className="cursor-pointer mt-12" variant={'outline'}>Busque Uma Vaga</Button>
    </section>
  );
} 