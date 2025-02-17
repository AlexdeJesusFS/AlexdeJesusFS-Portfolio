import styled from "styled-components";
import cursorPointer from "../../../../../assets/cursor/cursorPointer.svg";
import media from "../../../../../media";

export const Container = styled.div`
    li {
        list-style: none;
        &:hover {
            cursor: url(${cursorPointer}) 12 12, pointer;//sobrepõe a definição padrão de cursor text para cursor pointer
        }
    }

    width: 100%;//98.7vw;//largura correta para evitar scroll horizontal
    overflow: hidden;
`;

export const DevIcons = styled.div`
    max-width: 100%; 
    margin: 0 auto;
    overflow: hidden;

    ul {
        display: flex;
        align-items: center;
        gap: 4rem;

        /* Criar o efeito contínuo */
        animation: slide 14s infinite linear;
        width: max-content; /* Importante para o fluxo contínuo */
    }
    
    ul:hover {
        animation-play-state: paused;
    }
    
    img {
        width: 75px;

        ${media.desktop(`
            width: 100px;
        `)};
    }

    @keyframes slide {
        0% {
            transform: translateX(0); /* Começa na posição inicial */
        }
        100% {
            transform: translateX(-50%); /* Move metade do conteúdo */
        }
    }

    /* Duplicação visual */
    ul::after {
        content: "";
        display: block;
        width: 100%;
        flex-shrink: 0;
        background: url(${(props) => props.theme.icons});
    }
`;
