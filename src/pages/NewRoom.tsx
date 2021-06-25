import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useAuth();
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração Q&amp;A" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Nome da sala" />
                        <Button type="submit">Criar na sala</Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}