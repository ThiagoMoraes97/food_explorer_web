import { Container } from "./style";
import PropTypes from "prop-types";

export function Button({ title, icon: Icon ,...rest }) {
    return (
        <Container {...rest}>
            {Icon && (typeof Icon === "function" ? <Icon /> : <img src={Icon} alt="Ícone" />)}
            {title}
        </Container>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,   
    icon: PropTypes.oneOfType([           
        PropTypes.elementType,            
        PropTypes.string                 
    ])
};