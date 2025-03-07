import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Logo from './logo';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="max-w-5xl w-full flex justify-between py-4 mx-auto">
      <div className="flex items-center">
        <Logo />
      </div>
      <main className="flex items-center gap-4">
        <Link className={cn(buttonVariants({ variant: 'link' }))} href="/ ">
          Home
        </Link>
        <Link className={cn(buttonVariants({ variant: 'link' }))} href="/sobre">
          Sobre
        </Link>
        <Link className={cn(buttonVariants({ variant: 'link' }))} href="/vagas">
          Vagas
        </Link>
        <Link className={cn(buttonVariants({ variant: 'link' }))} href="/vagas/cadastro">
          Cadastrar Vaga
        </Link>
      </main>
    </nav>
  );
}
