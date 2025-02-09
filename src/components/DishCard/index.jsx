import { Container } from './style';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import exampleDishPng from '../../assets/exampleDish.png';
import PropTypes from "prop-types";


export function DishCard({icon: Icon, title, price, description}) {
    const [quantity, setQuantity] = useState(0);

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
        <button className='iconButton'>{Icon && <Icon/>}</button>
        <img src={exampleDishPng} alt="Prato de exemplo" />
        <h2>{`${title} >`}</h2>
        <p>{description}</p>
        <span className='price'>{`R$ ${price}`}</span>
        <section className="add_dish">
            <div className="add_button">
                <button className='remove' onClick={removeQuantity}>
                    <FaMinus />
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button className='add' onClick={addQuantity}>
                    <FaPlus />
                </button>
            </div>
            <button type='button' className='insert_button'>incluir</button>
        </section>
      
    </Container>
  );
}

DishCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]), 
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,  
    description: PropTypes.string.isRequired,  
};