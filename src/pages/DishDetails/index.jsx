import { Container, Main } from './style';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextButton } from '../../components/TextButton';
import exampleDishPng from '../../assets/exampleDish.png';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { Ingredients } from '../../components/Ingredients';
import { useAuth } from '../../hooks/useAuth';

const ingredients = [
   { title: "Rabanetes",
    id: 1},
    { title: "Folhas verdes",
    id: 2},
    { title: "Molho agridoce",
    id: 3},
    { title: "Gergelim",
    id: 4},
    { title: "Pão naan",
    id: 5},
];

export function DishDetails() {

    const { user } = useAuth();

    const [quantity, setQuantity] = useState(0);
    const [dishPrice, setDishPrice] = useState(24.99);

    function addQuantity() {
        setQuantity(quantity + 1);
    }

    function removeQuantity() {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

  return (
    <Container>
        <Header />

        <Main>

            <TextButton title="< voltar" />

            <section className="dish_info">
                <img src={exampleDishPng} alt="Imagem do prato" />
                <section className="dish_description">
                    
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    
                    { ingredients && ingredients.map(ingredient => <Ingredients key={ingredient.id} title={ingredient.title} />) }

                   <section className="add_dish">
                        {user.role === "admin" ? <button type='button' className='insert_button'>Editar prato</button> :
                            <> 
                                <div className="add_button">
                                    <button className='remove' onClick={removeQuantity}>
                                        <FaMinus />
                                    </button>
                                    <span>{String(quantity).padStart(2, "0")}</span>
                                    <button className='add' onClick={addQuantity}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <button type='button' className='insert_button'>{`incluir ∙ R$ ${dishPrice.toFixed(2).replace(".",",")}`}</button>
                            </> 
                        }
                        
                    </section>
                    
                </section>
            </section>
        </Main>

        <Footer />
    </Container>
  );
}