import { Container } from "./style";
import PropTypes from 'prop-types';

export function TextButton({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
};

TextButton.propTypes = {
    title: PropTypes.string.isRequired, 
};