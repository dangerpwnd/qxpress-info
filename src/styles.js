import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Styles

export const globalStyles = (
    <Global styles={css`
            html {
                text-align: center;
                background: #491d88;
                color: white;
            },
            h1 {
                color: #ffffff;
                text-align: center;
            },
            input[type="date"]:focus,
            input[type="text"]:focus,
            select:focus {
            border-color: #2491eb;
            outline: 1px solid #2491eb;
            },
            label {
                font-weight: bold;
            }
        `}
    />
)

export const navStyles = css`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
`

export const linkStyles = css`
    border-style: none solid solid solid;
    padding: 1rem;
    color: white;
    background-color: blue;
    &:active {
    background-color: darkblue;
    }
`

// Styled Components

export const StyledNav = styled.nav`
    ${navStyles};
`

export const StyledLink = styled.a`
    ${linkStyles};
`