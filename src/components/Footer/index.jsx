import { Container, Logo } from "./style";

export function Footer() {
  return (
    <Container>
        <Logo>
            <svg 
                width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5391 0.744385L26.5294 8.24438V23.2444L13.5391 30.7444L0.548681 23.2444V8.24438L13.5391 0.744385Z" fill="#4D585E"/>
            </svg>

            <h2>food explorer</h2>               
        </Logo>

        <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}