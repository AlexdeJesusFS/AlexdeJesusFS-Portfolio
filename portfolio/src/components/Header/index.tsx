import { Container, LeftSide, Menu, IconContainer, HeaderTitle } from "./styles"
import HeaderButton from "./Button/index";
import clickButtonSound from "../../assets/sounds/buttonClicking.wav"

import { AboutIcon, ChatIcon, ConstructIcon } from './icons';

import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    function clickSound() {
        const audio = new Audio(clickButtonSound);
        audio.play();
    };
    
    function clickTitle() {
        const audio = new Audio(clickButtonSound);
        audio.play();
        navigate("/");
    }

    return (
        <Container>
            <LeftSide>
                <HeaderTitle onClick={clickTitle} >Alex de Jesus</HeaderTitle>
            </LeftSide>
            <Menu>
                <HeaderButton href="#sobre" onClick={clickSound} >Sobre{<IconContainer><AboutIcon /></IconContainer>}</HeaderButton>
                <HeaderButton href="#projetos" onClick={clickSound} >Projetos{<IconContainer><ConstructIcon /></IconContainer>}</HeaderButton>
                <HeaderButton href="#fale_comigo" onClick={clickSound} >Fale comigo{<IconContainer><ChatIcon /></IconContainer>}</HeaderButton>
            </Menu>
        </Container>
    );
};

export default Header;
/* 
altIcon="Ícone circular de informação/sobre">{"Sobre"}</HeaderButton>
altIcon="Ícone de ferramentas cruzadas/projetos">{"Projetos"}</HeaderButton>
altIcon="Ícone de balão de fala/chat">{"Fale comigo"}</HeaderButton>
*/