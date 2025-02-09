import { Container, Dishes } from './style';
import PropTypes from 'prop-types';

export function DishCollection({title, swiperActive, children}) {
  return (
    <Container>
      <h2>{title}</h2>
      <Dishes className={swiperActive ? 'swiper-active' : ''}> 
        {children}
      </Dishes>
    </Container>
  );
}

DishCollection.propTypes = {
  title: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired,
  swiperActive: PropTypes.bool,
};