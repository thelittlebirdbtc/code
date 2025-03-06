import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="mx-auto max-w-5xl flex items-center justify-between py-6">
            <Logo />
            <main className="flex items-center space-x-4 px-8">
                <Link className={cn(buttonVariants({variant:"link"}))} href="/">Home</Link>
                <Link className={cn(buttonVariants({variant:"link"}))} href="/Sobre">Sobre</Link>
                <Link className={cn(buttonVariants({variant:"link"}))} href="/Vagas">Vagas</Link>
                <Link className={cn(buttonVariants({variant:"link"}))} href="/Vagas/Cadastro">Cadastrar Vagas</Link>
            </main>
        </nav>
    )
}  