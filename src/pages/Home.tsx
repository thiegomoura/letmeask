import { useHistory } from 'react-router-dom';
import React from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    const history = useHistory()
    // const { user, signInWithGoogle } = useAuth()

    // async function handleCreateRoom() {
    //     if (!user) {
    //         await signInWithGoogle()
    //     }

    //     history.push('/rooms/new')
    // }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração Q&amp;A" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Cria sua sala com o Google
                    </button>
                    <div className="separator">ou entra em uma sala</div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}