import { Github, Instagram, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className=" bg-black py-10 text-gray-300 mx-auto px-10">
            <div className="justify-between max-w-5xl mx-auto flex">
                <div className="max-w-sm">
                    <Logo bg="dark" />
                    <p className="text-sm mt-2 font-light font-display">
                    O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <Instagram className="cursor-pointer transition duration-300 hover:text-blue-500"/>
                    <Github className="cursor-pointer transition duration-300 hover:text-blue-500"/>
                    <Mail className="cursor-pointer transition duration-300 hover:text-blue-500"/>
                </div>
            </div>
        </footer>
    )
}