import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="w-full mx-auto max-w-5xl flex items-center justify-between py-6">
            <Logo />
            <main className="flex items-center space-x-4 px-8">
                <a className={cn(buttonVariants({variant:"link"}))} href="/Home">Home</a>
                <a className={cn(buttonVariants({variant:"link"}))} href="/Sobre">Sobre</a>
                <a className={cn(buttonVariants({variant:"link"}))} href="/Vagas">Vagas</a>
                <a className={cn(buttonVariants({variant:"link"}))} href="/Vagas/Cadastro">Cadastrar Vagas</a>
            </main>
        </nav>
    )
}  