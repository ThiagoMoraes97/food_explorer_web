import { Container, Logo, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignUp() {
    return (
        <Container>
           <main>
                <Logo>
                    <img src="/logo.svg" alt="Logo Food Explorer" />
                    <h2>food explorer</h2>
                </Logo>

                <Form>
                    <h1>Crie sua conta</h1>

                    <section className="input-wrapper">
                        <label htmlFor="name">Seu nome</label>
                        <Input type="text" id="name" placeholder="Maria da Silva" />
                    </section>

                    <section className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" placeholder="exemplo@exemplo.com.br" />
                    </section>

                    <section className="input-wrapper">
                        <label htmlFor="password">Senha</label>
                        <Input type="password" id="password" placeholder="No mínimo 6 caracteres" />
                    </section>

                    <Button title="Criar conta" />

                    <TextButton title="Já tenho uma conta"/>
                </Form>
           </main>
        </Container>
    )
}