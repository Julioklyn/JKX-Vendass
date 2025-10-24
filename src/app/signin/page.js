"use client";

import styles from './signin.module.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { signinWithGoogle } from '../../firebase';  // Ajuste para o nome correto do export

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function handleGoogleSignin() {
        setLoading(true);
        setError(null);
        try {
            const userObj = await signinWithGoogle();  // Usando o nome corrigido
            setUser({
                name: userObj.displayName,
                email: userObj.email,
                photoUrl: userObj.photoURL,
                uid: userObj.uid,
            });
            console.log("Usuário logado:", userObj);
        } catch (err) {
            console.error("Erro no login com Google:", err);
            setError(err.message || 'Erro no login');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Entre na sua conta e negocie com segurança!</h2>
                <p>Acesse e aproveite uma experiência segura dentro da JKX</p>

                <div className={styles.socialLogin}>
                    <button 
                        className={styles.google}
                        onClick={handleGoogleSignin}
                        disabled={loading}
                        aria-label='Entrar com Google'>
                        <FcGoogle size={24} />
                    </button>
                    <button className={styles.facebook}>
                        <FaFacebook size={24} />
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>Ou conecte com</span>  {/* Corrigido o texto para "conecte" */}
                </div>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='Digite seu e-mail' />

                <button className={styles.loginBtn}>acessar</button>

                <p className={styles.register}>
                    Não tem uma conta? <a href='/signup'>Cadastre-se</a>
                </p>
            </div>

            <p className={styles.terms}>
                Ao continuar, você concorda com os <a href='#'>Termos de uso</a> e a <a href='#'>Política de Privacidade</a> da JKX e seus parceiros, e em receber comunicações da JKX.
            </p>
        </div>
    );
}