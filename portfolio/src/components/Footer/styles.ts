import styled from "styled-components";


export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    height: 150px;
    padding: 0px 144px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: var(--Primary-water-green-50, #E6FAF7);

    .copyright {
        color: var(--Primary-water-green-900, #005647);
        /* Caption */
        font-family: "Fira Code";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 200% */
    }

    .gif-computer {
        width: 152px;
        height: 147px;
        flex-shrink: 0;
    }
`

export const RightSide = styled.div`
    display: flex;
    height: 120px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    flex: 1 0 0;
`

export const ContactsContainer = styled.div`
    display: flex;
    height: 84px;
    justify-content: center;
    align-items: center;
    gap: 26px;

    .email {
        color: var(--Primary-water-green-900, #005647);
        transition: color 0.4s ease;
        &:hover {
            color: #E13C30;
        }
    }
    
    .github {
        color: var(--Primary-water-green-900, #005647);
        transition: color 0.4s ease;
        &:hover {
            color: #171515;
        }
    }

    .linkedin {
        color: var(--Primary-water-green-900, #005647);
        transition: color 0.4s ease;
        &:hover {
            color: #0E76A8;
        }
    }

    .whatsapp {
        color: var(--Primary-water-green-900, #005647);
        transition: color 0.4s ease;
        &:hover {
            color: #25D366;
        }
    }
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
`

export const GifContainer = styled.div`
    display: flex;
    width: 100%;
    height: 147px;
    justify-content: center;
    align-items: center;
`

//export const Gif = styled.