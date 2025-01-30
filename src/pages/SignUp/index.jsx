import { Container, Logo, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signUp } = useAuth();

    async function handleSignUp(event) {
        event.preventDefault();
        await signUp({ name, email, password });
        navigate(-1);
    };

    function navigateToLogin() {
        navigate("/");
    }

    const isMobile = useMediaQuery({ query: "(max-width: 48em)" });

    return (
        <Container>
           <main>
                <Logo>
                    <img src="/logo.svg" alt="Logo Food Explorer" />
                    <h2>food explorer</h2>
                </Logo>

                <Form>
                    {!isMobile && <h1>Crie sua conta</h1>}
                    
                    <section className="input-wrapper">
                        <label htmlFor="name">Seu nome</label>
                        <Input type="text" id="name" placeholder="Maria da Silva" onChange={e => setName(e.target.value)} />
                    </section>

                    <section className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" placeholder="exemplo@exemplo.com.br" onChange={e=> setEmail(e.target.value)} />
                    </section>

                    <section className="input-wrapper">
                        <label htmlFor="password">Senha</label>
                        <Input type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
                    </section>

                    <Button title="Criar conta" onClick={handleSignUp} />

                    <TextButton title="Já tenho uma conta" onClick={navigateToLogin} />
                </Form>
           </main>
        </Container>
    )
}