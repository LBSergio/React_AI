import { css, keyframes } from "styled-components";

export const fadeIn = ({ time = '0.6s', type = 'ease' } = {} ) =>
    css`
        animation: ${time} ${fadeInKeyframes} ${type};   
    `

const fadeInKeyframes= keyframes`
    from{
        filter: blur(5px);
        opacity: 0;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`

const slideInKeyframes = keyframes`
    from {
        transform: translate3d(0, -100px, 0) scale(.5);
    }
    to {
        transform: translate3d(0, 0, 0) scale(.5);
    }
`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) => (
    css`
        animation: ${time} ${slideInKeyframes} ${type} forwards;
    `
  )