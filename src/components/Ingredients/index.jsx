import { Container } from './style';
import PropTypes from "prop-types";

export function Ingredients({title}) {
  return (
    <Container>
        {title}
    </Container>
  );
};

Ingredients.propTypes = {
    title: PropTypes.string.isRequired, 
};