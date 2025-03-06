import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <Logo />
            <ul className="flex items-center space-x-4 px-8">
                <li>Home</li>
                <li>Sobre</li>
                <li>Vagas</li>
                <li>Cadastrar Vagas</li>
            </ul>
        </nav>
    )
}   