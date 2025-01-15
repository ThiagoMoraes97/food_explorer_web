import { Container } from "./style";

export function TextButton({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}