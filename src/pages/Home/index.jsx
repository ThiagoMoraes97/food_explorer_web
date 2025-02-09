import { Container, Main } from './style';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import fruitsImg from '../../assets/fruits.png';


export function Home() {
  return (
    <Container>
        <Header />
        <Main>
            <section>

                <img src={fruitsImg} alt="Imagem de frutas vermelhas e macarons" /> 
                <div className="section_info">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </section>

        </Main>
        <Footer />
    </Container>
  );
}