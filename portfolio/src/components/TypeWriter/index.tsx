import { ReactTyped } from "react-typed";
import { ITypewriterProps } from "./types";
import { Container, TypedContainer } from "./styles";

function TypeWrite({ phrases, typeSpeed, backSpeed, loop, backDelay, startDelay }: ITypewriterProps) {
    return (
        <Container>
            <h1>Development</h1>
            <h1>
                <TypedContainer>
                    <ReactTyped
                        strings={phrases}  // Frases passadas como props
                        typeSpeed={typeSpeed}  // Velocidade da digitação
                        backSpeed={backSpeed}  // Velocidade para apagar
                        loop={loop}  // Loop infinito ou não
                        backDelay={backDelay}  // Tempo antes de apagar
                        startDelay={startDelay}
                    />
                </TypedContainer>
            </h1>
            
        </Container>
    );
};

export default TypeWrite;