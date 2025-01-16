import { Container, Logo, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { useMediaQuery } from "react-responsive";

export function SignIn() {

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
                        <Input type="email" id="email" placeholder="exemplo@exemplo.com.br" />
                    </section>
                    
                    <section className="input-wrapper">
                        <label htmlFor="password">Senha</label>
                        <Input type="password" id="password" placeholder="No mínimo 6 caracteres" />
                    </section>

                    <Button title="Entrar" />

                    <TextButton title="Criar uma conta"/>
                </Form>
           </main>
        </Container>
    )
}