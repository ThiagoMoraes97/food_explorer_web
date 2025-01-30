import { Container, Logo, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    const navigate = useNavigate();

    async function handleSignIn(event) {
        try {
            event.preventDefault();
            await signIn({ email, password });
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login");
            }
        }
    };

    function navigateToSignUp() {
        navigate("/register");
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
                    {!isMobile && <h1>Faça login</h1>}

                    <section className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" placeholder="exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
                    </section>
                    
                    <section className="input-wrapper">
                        <label htmlFor="password">Senha</label>
                        <Input type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
                    </section>

                    <Button title="Entrar" onClick={handleSignIn} />

                    <TextButton title="Criar uma conta" onClick={navigateToSignUp} />
                </Form>
           </main>
        </Container>
    )
}